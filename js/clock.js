//Data iki kurios skaiciuojamas laikas (su valandomis)
const countDownDate = new Date("December 23, 2022 12:00:00").getTime();

//Skaiciavimo atnaujinimas kas 1s
const x = setInterval(function () {
  //pirmiausiai gaunama šiandienos data ir laikas
  const now = new Date().getTime();

  //Laikotarpis nuo šiandienos iki deadlin'o
  const distance = countDownDate - now;

  //Apskaiciuojamas laikas dienomis, valandomis, minutemis ir sekundemis
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const formattedHours = ("0" + hours).slice(-2);

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const formatteMinutes = ("0" + minutes).slice(-2);

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const formatteSeconds = ("0" + seconds).slice(-2);

  //Isvedamas elementas
  document.getElementById("time").innerHTML =
    days +
    " " +
    formattedHours +
    " " +
    formatteMinutes +
    " " +
    formatteSeconds +
    " ";

  //Baigus skaiciavima - nurodomas tekstas
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "LAIKAS BAIGĖSI! :(";
  }
}, 1000);
