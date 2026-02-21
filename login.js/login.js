document.getElementById("login-btn").addEventListener("click", function () {
  // inputNum
  const inputNum = document.getElementById("numInput");
  const phoneNum = inputNum.value;
  console.log(phoneNum);
  // pinNum
  const inputPin = document.getElementById("pinInput");
  const pinNum = inputPin.value;
  console.log(pinNum);
  if (phoneNum === "01769991047" && pinNum === "1234") {
    alert("Login Success");
    window.location.assign("/home.html");
  } else {
    alert("Login Failed");
    window.location.assign("/index.html");
    return;
  }
});
