const countDownDate = new Date("Dec 1, 2024 00:00:00").getTime();
const format = (n) => (n < 10 ? "0" + n : n);

const x = setInterval(function () {
  const clockDOM = document.getElementById("time");

  const now = new Date().getTime();

  let diff = Math.floor((countDownDate - now) / 1000);

  if (diff <= 0) {
    clearInterval(x);
    clockDOM.textContent = "LAIKAS BAIGĖSI! :(";
  } else {
    const seconds = diff % 60;
    diff = (diff - seconds) / 60;

    const minutes = diff % 60;
    diff = (diff - minutes) / 60;

    const hours = diff % 24;
    diff = (diff - hours) / 24;

    clockDOM.textContent = `${diff} ${format(hours)} ${format(
      minutes
    )} ${format(seconds)}`;
  }
}, 1000);
