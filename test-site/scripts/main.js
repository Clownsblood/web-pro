let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/心形天空.jpg") {
    myImage.setAttribute("src", "images/唯美2.png");
    
  } else {
    myImage.setAttribute("src", "images/心形天空.jpg");
  }
};


//设置欢迎界面

let myButton = document.querySelector("button"); //使用myButton将button按钮存起来
let myHeading = document.querySelector("h1");//同理

function setUserName() {//定义一个无参函数
  let myName = prompt("请输入你的名字。");//弹窗提示输入名字，并存储在myName中
  localStorage.setItem("name", myName);
  myHeading.textContent = "你好，" + myName;
}
function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "你好，" + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "你好，" + storedName;
}
myButton.onclick = function () {
  setUserName();
};
