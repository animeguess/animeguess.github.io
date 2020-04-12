var listaAnime = [
  "angel beats",
  "attack on titan",
  "death note",
  "toradora",
  "boku no hero academia",
  "mirai nikki",
  "no game no life",
  "one punch man",
  "steins;gate",
  "sword art online 2",
  "sword art online",
  "sword art online alicization",
  "tokyo ghoul",
  "noragami",
  "ao no exorcist",
  "hunter x hunter",
  "akame ga kill",
  "shigatsu wa kimi no uso",
];
document
  .querySelector('input[type="button"]')
  .addEventListener("click", function () {
    if (document.getElementById("myInput").value == listaAnime[losuj]) {
      punkty++;
      punktmax++;
    } else {
      punktmax++;
    }
    listaAnime.splice(losuj, 1);
    document.getElementById("punkciki").innerHTML = punkty + "/" + punktmax;
    losuj = Math.floor(Math.random() * (listaAnime.length - 0)) + 0;
    document.querySelector("img").src = "img/" + listaAnime[losuj] + ".jpg";
  });
var punkty = 0;
var punktmax = 0;
document.getElementById("punkciki").innerHTML = punkty + "/" + punktmax;
var losuj = Math.floor(Math.random() * (listaAnime.length - 0)) + 0;
document.querySelector("img").src = "img/" + listaAnime[losuj] + ".jpg";
document.querySelector("img").style.width = "1000px";
function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("DIV");
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener("click", function (e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });

  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}
autocomplete(document.getElementById("myInput"), listaAnime);
