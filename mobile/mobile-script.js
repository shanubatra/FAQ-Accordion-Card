const q1 = document.getElementById("ques1");
const q2 = document.getElementById("ques2");
const q3 = document.getElementById("ques3");
const q4 = document.getElementById("ques4");
const q5 = document.getElementById("ques5");

const a1 = document.getElementById("A1");
const a2 = document.getElementById("A2");
const a3 = document.getElementById("A3");
const a4 = document.getElementById("A4");
const a5 = document.getElementById("A5");


function drop1() {
  a1.classList.toggle("hide");
  q1.classList.toggle("hide2");
}


function drop2() {
    a2.classList.toggle("hide");
    q2.classList.toggle("hide2");
  }

  function drop3() {
    a3.classList.toggle("hide");
    q3.classList.toggle("hide2");
  }

  function drop4() {
    a4.classList.toggle("hide");
    q4.classList.toggle("hide2");
  }

  function drop5() {
    a5.classList.toggle("hide");
    q5.classList.toggle("hide2");
  }
        