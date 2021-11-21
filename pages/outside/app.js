let bush;
let key;

window.onload = init;

function init() {
  window.addEventListener("message", (message) => {
    console.log(message.data);
  });
  setTimeout(() => {
    document.getElementById("hint-1").style.display = "none";
  }, 5000);
  bush = document.getElementById("bush");
  bush.addEventListener("click", moveBush);
  key = document.getElementById("key");
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
