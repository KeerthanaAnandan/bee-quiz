const curlpoints = sessionStorage.getItem("curlpoints");
const growthpoints = sessionStorage.getItem("growthpoints");
const damagepoints = sessionStorage.getItem("damagepoints");
const moisturepoints = sessionStorage.getItem("moisturepoints");
const alphabet = sessionStorage.getItem("alphabet");
const numnumber = sessionStorage.getItem("number");
let mess;
let typo;

if (
  curlpoints > growthpoints ||
  curlpoints > damagepoints ||
  curlpoints > moisturepoints
) {
  typo = "Curl Enhancing Box " + alphabet + numnumber;
  mess = [
    "Thank you for telling us more about your hair! This is the box we recommend for you based on your current hair goals and where you are at in your hair journey.",
  ];
}

if (
  growthpoints > curlpoints ||
  growthpoints > damagepoints ||
  growthpoints > moisturepoints
) {
  typo = "Growth/Length Retention Box " + alphabet + numnumber;
  mess = [
    "Thank you for telling us more about your hair! This is the box we recommend for you based on your current hair goals and where you are at in your hair journey.",
  ];
}

if (
  damagepoints > curlpoints ||
  damagepoints > growthpoints ||
  damagepoints > moisturepoints
) {
  typo = "Damage control box " + alphabet + numnumber;
  mess = [
    "Thank you for telling us more about your hair! This is the box we recommend for you based on your current hair goals and where you are at in your hair journey.",
  ];
}
if (
  moisturepoints > curlpoints ||
  moisturepoints > growthpoints ||
  moisturepoints > damagepoints
) {
  typo = "Moisture Box " + alphabet + numnumber;
  mess = [
    "Thank you for telling us more about your hair! This is the box we recommend for you based on your current hair goals and where you are at in your hair journey.",
  ];
}

const mao = mess.map((ms) => `<li>` + ms + `</li>`).join("");

document.querySelector(".headmsg").innerHTML = typo;
const msgme = document.querySelector(".msghere");
msgme.className = "center-item";
//document.querySelector(".msghere").innerHTML = mao;

msgme.innerHTML = mao;
document.querySelector(".usertype").value = typo;
//document.querySelector(".usertype").style.display = "none";
