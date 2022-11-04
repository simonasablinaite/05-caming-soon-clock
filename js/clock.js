const countDownDate = new Date("Dec 23, 2022 12:00:00").getTime();
const format = (n) => (n < 10 ? "0" + n : n);

const x = setInterval(function () {
  const clockDOM = document.getElementById("time");

  const now = new Date().getTime();

  let diff = Math.floor((countDownDate - now) / 1000);

  if (diff <= 0) {
    clearInterval(x);
    clockDOM.innerText = "LAIKAS BAIGĖSI! :(";
  } else {
    const seconds = diff % 60;
    diff = (diff - seconds) / 60;

    const minutes = diff % 60;
    diff = (diff - minutes) / 60;

    const hours = diff % 24;
    diff = (diff - hours) / 24;

    // const days = diff / 24;

    clockDOM.innerText = `${diff} ${format(hours)} ${format(minutes)} ${format(
      seconds
    )}`;
  }
});
