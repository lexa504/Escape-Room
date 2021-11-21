let inventories = [];
window.onload = init;
function init() {
  // setTimeout(() => {
  //   document.getElementById("main-display").src = "./pages/bedroom/index.html"
  // }, 3000);
  window.addEventListener(
    "message",
    (message) => {
      if (message.data.action) {
        if (message.data.action === "in") {
          if (message.data.item === "outside-key") {
            let container = document.getElementById(
              "inventory-item-" + inventories.length
            );
            container.style["background-image"] =
              'url("./images/outside-key.png")';
            container.style["background-repeat"] = "no-repeat";
            container.style["background-size"] = "100% 100%";
            container.style["background-position"] = "center";
            container.addEventListener("click", () => {
              container.style["background-color"] = "white";
              selectInventory(message.data.item);
            });
            inventories.push("outside-key");
          }
        } else if (message.data.action === "alert") {
          console.log("alert");
          document.getElementById("message-div").innerHTML = message.data.msg;
          if (message.data.color) {
            document.getElementById("message-div").style.color = message.data.color;
          }
        }
      }
    },
    false
  );
}
function selectInventory(item) {
  if (item === "outside-key") {
    // inform the outside page that key has been selected
    console.log("point check:)");
    document
      .getElementById("main-display")
      .contentWindow.postMessage("got outside key", "*");
  }
}
