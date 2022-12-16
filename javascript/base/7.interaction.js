// 1. 浏览器常用的交互函数alert、prompt、confirm
// 2. alert
alert("await"); // 弹窗，等待用户按下ok

// 3. prompt 
let result = prompt("text", "0"); // 弹出一个窗口，第一个参数作为文本提示，第二个参数作为输入框的默认值，然后将用户输入的值或者默认值作为返回值

// 4. confirm
let is_boss = confirm("test"); // 返回的是布尔值