//Data iki kurios skaiciuojamas laikas (su valandomis)
let countDownDate = new Date("December 23, 2022 12:00:00").getTime();

//Skaiciavimo atnaujinimas kas 1s
let x = setInterval(function () {
  //pirmiausiai gaunama šiandienos data ir laikas
  let now = new Date().getTime();

  //Laikotarpis nuo šiandienos iki deadlin'o
  let distance = countDownDate - now;

  //Apskaiciuojamas laikas dienomis, valandomis, minutemis ir sekundemis
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Isvedas elementas
  document.getElementById("time").innerHTML =
    days + " " + hours + " " + minutes + " " + seconds + " ";

  //Baigus skaiciavima - nurodomas tekstas
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "LAIKAS BAIGĖSI! :(";
  }
}, 1000);
