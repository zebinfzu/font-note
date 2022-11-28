// 1. 字面量和联合类型 字面量和 | 使用表示一组值
interface Res {
  code: 10000 | 10001 | 50000;
  status: "success" | "failure";
  data: any;
}

// 2. 字面量用作类型
const str: "hello" = "hello";
const num: 599 = 599;
const bool: true = true;

// 3. 联合类型，不同类型同 | 使用
interface Tmp {
  mixed: true | string | 599 | {} | (() => {}) | (1 | 2)
}

// 4. 利用联合类型来实现手动的互斥属性
interface Tmp {
  user: |
  {
    vip: true;
    expires: string;
  }
  | {
    vip: false;
    promotion: string;
  }
}

// 5. 对象字面量类型，说明该这个对象的值全部是字面量值
interface Tpp {
  obj: {
    name: 'code',
    age: 18
  }
}

let t: Tpp = {
  obj: {
    name: 'code',
    age: 18
  }
};


// 6. 枚举enum， JavaScript还没有enum
// 对于javascript，可能更像一个constants对象
const _PageUrl = {
  Home_Page_Url: "url1",
  Setting_Page_Url: "url2",
  Share_Page_Url: "url3",
}
// 使用hashmap的值
enum PageUrl {
  Home_Page_Url = "url1",
  Setting_Page_Url = "url2",
  Share_Page_Url = "url3",
}

const home = PageUrl.Home_Page_Url;