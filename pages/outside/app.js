let bush;
let key;
let hasOutsideKey = false;

window.onload = init;

function init() {
  window.addEventListener("message", (message) => {
    if (message.data === "got outside key") {
      console.log("got it");
      hasOutsideKey = true;
    }
  });
  bush = document.getElementById("bush");
  bush.addEventListener("click", moveBush);
  key = document.getElementById("key");
  window.parent.postMessage(
    {
      action: "alert",
      msg: "You need to go inside the house! Try and find a key.",
      color: "black"
    },
    "*"
  );
}

function moveBush() {
  bush.style.left = "55%";
  bush.classList.add("bushSlide");
  key.addEventListener("click", putKeyInventory);
}

function putKeyInventory() {
  key.style.display = "none";
  window.parent.postMessage(
    {
      action: "in",
      item: "outside-key",
    },
    "*"
  );
}
