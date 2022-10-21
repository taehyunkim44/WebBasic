const starter = function () {
  container.style.display = "flex";
  messageContainer.style.display = "none";
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      counterMaker();
    }, 1000 * i);
  }
};

let i = 0;
while (i < 100) {
  setTimeout(counterMaker, 1000 * i);
  i++;
}
