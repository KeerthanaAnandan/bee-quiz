const curlpoints = sessionStorage.getItem("curlpoints");
const growthpoints = sessionStorage.getItem("growthpoints");
const damagepoints = sessionStorage.getItem("damagepoints");
const moisturepoints = sessionStorage.getItem("moisturepoints");
const alphabet = sessionStorage.getItem("alphabet");
const numnumber = sessionStorage.getItem("number");
let mess;
let typo;
window.onload = () => {
  sessionStorage.clear();
};
//curl
if (
  curlpoints > growthpoints &&
  curlpoints > damagepoints &&
  curlpoints > moisturepoints
) {
  typo = "Curl Enhancing Box " + alphabet + numnumber;
  mess = [
    "Thank you for telling us more about your hair! This is the box we recommend for you based on your current hair goals and where you are at in your hair journey.",
  ];
}
//growth
else if (
  growthpoints > curlpoints &&
  growthpoints > damagepoints &&
  growthpoints > moisturepoints
) {
  typo = "Growth/Length Retention Box " + alphabet + numnumber;
  mess = [
    "Thank you for telling us more about your hair! This is the box we recommend for you based on your current hair goals and where you are at in your hair journey.",
  ];
}
//damage
else if (
  damagepoints > curlpoints &&
  damagepoints > growthpoints &&
  damagepoints > moisturepoints
) {
  typo = "Damage Control Box " + alphabet + numnumber;
  mess = [
    "Thank you for telling us more about your hair! This is the box we recommend for you based on your current hair goals and where you are at in your hair journey.",
  ];
}
//moisture
else if (
  moisturepoints > curlpoints &&
  moisturepoints > growthpoints &&
  moisturepoints > damagepoints
) {
  typo = "Moisture Box " + alphabet + numnumber;
  mess = [
    "Thank you for telling us more about your hair! This is the box we recommend for you based on your current hair goals and where you are at in your hair journey.",
  ];
}

//curl == growth = m
if ((curlpoints == growthpoints) == moisturepoints) {
  typo =
    "Moisture Box " +
    alphabet +
    numnumber +
    `<br />` +
    "Growth/Length Retention Box " +
    alphabet +
    numnumber +
    `<br />` +
    "Curl Enhancing Box " +
    alphabet +
    numnumber;
  mess = [
    "Thank you for telling us more about your hair! This is the box we recommend for you based on your current hair goals and where you are at in your hair journey.",
  ];
} // m= c = d
else if ((moisturepoints == curlpoints) == damagepoints) {
  typo = [
    "Moisture Box" +
      alphabet +
      numnumber +
      `<br />` +
      "Curl Enhancing Box" +
      alphabet +
      numnumber +
      `<br />` +
      "Damage Control Box" +
      alphabet +
      numnumber,
  ];
  mess = [
    "Thank you for telling us more about your hair! This is the box we recommend for you based on your current hair goals and where you are at in your hair journey.",
  ];
} // c = g = d
else if ((curlpoints == growthpoints) == damagepoints) {
  typo =
    "Curl Enhancing Box " +
    alphabet +
    numnumber +
    `<br />` +
    "Growth/Length Retention Box " +
    alphabet +
    numnumber +
    `<br />` +
    "Damage Control Box " +
    alphabet +
    numnumber;
  mess = [
    "Thank you for telling us more about your hair! This is the box we recommend for you based on your current hair goals and where you are at in your hair journey.",
  ];
} // g = d = m
else if ((growthpoints == damagepoints) == moisturepoints) {
  typo =
    "Growth/Length Retention Box " +
    alphabet +
    numnumber +
    `<br />` +
    "Damage Control Box " +
    alphabet +
    numnumber +
    `<br />` +
    "Moisture Box " +
    alphabet +
    numnumber;
  mess = [
    "Thank you for telling us more about your hair! This is the box we recommend for you based on your current hair goals and where you are at in your hair journey.",
  ];
}

const mao = mess.map((ms) => `<li>` + ms + `</li>`).join("");

document.querySelector(".headmsg").innerHTML = typo;
const msgme = document.querySelector(".msghere");
msgme.className = "center-item";
//document.querySelector(".msghere").innerHTML = mao;

//msgme.innerHTML = mao;
//document.querySelector(".usertype").value = typo;
//document.querySelector(".usertype").style.display = "none";
