document.querySelector(".usertype").style.display = "none";
document.getElementById("resultbtn").style.display = "none";

//formspree

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  //var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    // button.style = "display: block ";
    status.classList.add("success");
    //adding button to the code
    // const buttbutton = document.createElement("button");
    //buttbutton.className = "successbtn";
    //document.getElementById("resultbtn").style.display = "block";
    location.href = "end.html";
    //status.innerHTML = "Submitted Successfully!";
  }

  function error() {
    location.href = "end.html";
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
////////type of user

const curlpoints = sessionStorage.getItem("curlpoints");
const growthpoints = sessionStorage.getItem("growthpoints");
const damagepoints = sessionStorage.getItem("damagepoints");
const moisturepoints = sessionStorage.getItem("moisturepoints");
const alphabet = sessionStorage.getItem("alphabet");
const numnumber = sessionStorage.getItem("number");

let typo;

if (
  curlpoints > growthpoints &&
  curlpoints > damagepoints &&
  curlpoints > moisturepoints
) {
  typo = "Curl Enhancing Box " + alphabet + numnumber;
}

if (
  growthpoints > curlpoints &&
  growthpoints > damagepoints &&
  growthpoints > moisturepoints
) {
  typo = "Growth/Length Retention Box " + alphabet + numnumber;
}

if (
  damagepoints > curlpoints &&
  damagepoints > growthpoints &&
  damagepoints > moisturepoints
) {
  typo = "Damage control box " + alphabet + numnumber;
}
if (
  moisturepoints > curlpoints &&
  moisturepoints > growthpoints &&
  moisturepoints > damagepoints
) {
  typo = "Moisture Box " + alphabet + numnumber;
}

//document.querySelector(".headmsg").innerHTML = typo;
//const msgme = document.querySelector(".msghere");
//msgme.className = "center-item";
//document.querySelector(".msghere").innerHTML = ma
document.querySelector(".usertype").value = typo;
//document.querySelector(".usertype").style.display = "none";
console.log(typo);
