// 1. 内建Date类
{
  let now = new Date();
  console.log(now);
  let Jan01_1970 = new Date(0); // 参数是毫秒，0表示1970年1月1日00:00:00
  // new Date(year, month, date, hours, minutes, seconds, ms)
}
// 2. Date类的一些常用方法
// getFullYear、getMonth、getDate、getHours、getMinutes、getSeconds、getMilliseconds

// 3. Date.parse(str) 调用会解析给定格式的字符串，并返回时间戳，解析失败返回NaN

// 4. JSON.stringify 对象转JSON
// 5. JSON.pase JSON转对象
{
  let student = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ["html", "css", "js"],
    spouse: null,
  };

  let json = JSON.stringify(student);
  console.log(json);
  let obj = JSON.parse(json);
  console.log(obj);
}
