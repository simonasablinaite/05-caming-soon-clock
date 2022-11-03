//Data iki kurios skaiciuojamas laikas
const countDownDate = new Date("Dec 23, 2022 12:00:00").getTime();

//Skaiciavimo atnaujinimas kas 1s
const x = setInterval(function () {
  //šiandienos data ir laikas
  const now = new Date().getTime();

  //Laikas nuo dabar iki deadlin'o
  const diff = countDownDate - now;

  // Sukuriamas sekundės kintamasis
  const second = 1000 * 60;

  //Apskaiciuojamas laikas dienomis, valandomis, minutemis ir sekundemis
  const days = Math.floor(diff / (second * 60 * 24));

  const hours = (
    "0" + Math.floor((diff % (second * 60 * 24)) / (second * 60))
  ).slice(-2);

  const minutes = ("0" + Math.floor((diff % (second * 60)) / second)).slice(-2);

  const seconds = ("0" + Math.floor((diff % second) / 1000)).slice(-2);

  //Isvedamas elementas
  document.getElementById("time").textContent = `${days} 
    ${hours} 
    ${minutes} 
    ${seconds}
    `;

  //Baigus skaiciavima - nurodomas tekstas
  if (diff < 0) {
    clearInterval(x);
    document.getElementById("time").textContent = "LAIKAS BAIGĖSI! :(";
  }
});
