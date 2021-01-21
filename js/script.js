function submitAnswers(e) {
  e.preventDefault();
  location.href = "form.html";
  var total = 5;
  var curlpoints = 0;
  var growthpoints = 0;
  var damagepoints = 0;
  var moisturepoints = 0;

  window.onload = () => {
    sessionStorage.clear();
  };

  // Get User Input
  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var q3 = document.forms["quizForm"]["q3"].value;
  var q4 = document.forms["quizForm"]["q4"].value;
  var q5 = document.forms["quizForm"]["q5"].value;

  // Validation
  for (i = 1; i <= total; i++) {
    if (eval("q" + i) == null || eval("q" + i) == "") {
      alert("You missed question " + i);
      return false;
    }
  }

  // Set Correct Answers
  //var answers = ["c", "a", "d", "a", "c"];
  ///curl enhancing
  var curlanswers = ["a", 0, 0, "d", "c"];
  //growth/length retention
  var growthanswers = ["c", 0, 0, "a", "b"];
  ///damage control
  var damageanswers = ["d", 0, 0, "c", "d"];
  //moisure
  var moistureanswers = ["b", 0, 0, "b", "a"];
  // Check Answers for curl enhancing
  for (i = 1; i <= total; i++) {
    if (eval("q" + i) == curlanswers[i - 1]) {
      curlpoints++;

      sessionStorage.setItem("curlpoints", curlpoints);
    }
  }
  // Check Answers for growth/length retention
  for (i = 1; i <= total; i++) {
    if (eval("q" + i) == growthanswers[i - 1]) {
      growthpoints++;

      sessionStorage.setItem("growthpoints", growthpoints);
    }
  }
  //check answers for damage control
  for (i = 1; i <= total; i++) {
    if (eval("q" + i) == damageanswers[i - 1]) {
      damagepoints++;

      sessionStorage.setItem("damagepoints", damagepoints);
    }
  }
  //check answers for damage control
  for (i = 1; i <= total; i++) {
    if (eval("q" + i) == moistureanswers[i - 1]) {
      moisturepoints++;

      sessionStorage.setItem("moisturepoints", moisturepoints);
    }
  }
  //second alphabet check
  if (q2 == "a") {
    sessionStorage.setItem("alphabet", "L");
  }
  if (q2 == "b") {
    sessionStorage.setItem("alphabet", "M");
  }
  if (q2 == "c") {
    sessionStorage.setItem("alphabet", "H");
  }
  if (q2 == "d") {
    sessionStorage.setItem("alphabet", "N");
  }
  //check for number
  if (q3 == "a") {
    sessionStorage.setItem("number", "2");
  }
  if (q3 == "b") {
    sessionStorage.setItem("number", "3");
  }
  if (q3 == "c") {
    sessionStorage.setItem("number", "4");
  }

  // Display Results(here return false is used inorder to avoid submitting again :>3 )
  var results = document.getElementById("results");
  results.innerHTML =
    "<h3>You scored <span>" +
    score +
    "</span> out of <span>" +
    total +
    "</span></h3>";
  // alert("You scored " + score + " out of " + total);

  //return false;
}
