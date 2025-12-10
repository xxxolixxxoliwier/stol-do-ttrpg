const board = document.getElementById("board");
const addBtn = document.getElementById("addToken");

let tokenId = 0;

addBtn.onclick = () => {
  const token = document.createElement("div");
  token.className = "token";
  token.textContent = ++tokenId;
  token.style.left = "100px";
  token.style.top = "100px";
  board.appendChild(token);
  enableDrag(token);
};

function enableDrag(token) {
  let offsetX, offsetY, dragging = false;

  token.addEventListener("mousedown", (e) => {
    dragging = true;
    const rect = token.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
  });

  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    const grid = 50;
    const snappedX = Math.round(x / grid) * grid;
    const snappedY = Math.round(y / grid) * grid;
    token.style.left = snappedX + "px";
    token.style.top = snappedY + "px";
  });

  document.addEventListener("mouseup", () => {
    dragging = false;
  });
}

const wynikKosci = document.getElementById("wynik-kosci");

const przyciskK6 = document.getElementById("rzut-k6");

const przyciskK20 = document.getElementById("rzut-k20");

const przyciskK4 = document.getElementById("rzut-k4");

const przyciskK8 = document.getElementById("rzut-k8");

const przyciskK12 = document.getElementById("rzut-k12");
s
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

przyciskK6.addEventListener("click", function() {
  const wynik = rollDice(6);
  wynikKosci.textContent = wynik;
});


przyciskK20.addEventListener("click", function() {
  const wynik = rollDice(20);
  wynikKosci.textContent = wynik;
});

przyciskK4.addEventListener("click", function() {
  const wynik = rollDice(4);
  wynikKosci.textContent = wynik;
});

przyciskK8.addEventListener("click", function() {
  const wynik = rollDice(8);
  wynikKosci.textContent = wynik;
});

przyciskK12.addEventListener("click", function() {
  const wynik = rollDice(12);
  wynikKosci.textContent = wynik;
});