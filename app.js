window.onload = init;
function init() {
  // setTimeout(() => {
  //   document.getElementById("main-display").src = "./pages/bedroom/index.html"
  // }, 3000);
  window.addEventListener("message", (event) => {
    console.log(event);
    document.getElementById("inventory").style["background-color"]="red";
  });
}
