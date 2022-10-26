// 휴대폰 번호 입력
function changeFocus1() {
  const phone1 = document.getElementById("p1").value;
  if (phone1.length === 3) {
    document.getElementById("p2").focus();
  }
}
function changeFocus2() {
  const phone2 = document.getElementById("p2").value;
  if (phone2.length === 4) {
    document.getElementById("p3").focus();
  }
}
function changeFocus3() {
  const phone3 = document.getElementById("p3").value;
  if (phone3.length === 4) {
    // 전화번호 마지막에서 인증번호로 넘어가는 부분
    document.getElementById("authButton").focus();
    document.getElementById("authButton");
    document.getElementById("authButton").disabled = false;
  }
}

//인증 및 시간
function buttonStart() {
  document.getElementById("start").disabled = true;
  document.getElementById("finish").disabled = true;
  document.getElementById("target").innerHTML = "000000";
  document.getElementById("timer").innerHTML = "03:00";
  document
    .getElementById("start")
    .setAttribute("style", "background-color:none;");
  document
    .getElementById("finish")
    .setAttribute("style", "background-color:none;");
}

// let isStarted = false;

// let auth = () => {
//   document.getElementById("finish").disabled = false;
//   if (isStarted === false) {
//     //타이머가 작동중이 아닐때
//     isStarted = true;
//     const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
//     document.getElementById("target").innerText = token;
//     document.getElementById("target").style.color = "#" + token;

//     let time = 180;

//     let timer = setInterval(function () {
//       if (time >= 0) {
//         let min = Math.floor(time / 60);
//         let sec = String(time % 60).padStart(2, "0");
//         document.getElementById("timer").innerText = min + ":" + sec;
//         time = time - 1;
//       } else {
//         document.getElementById("finish").disabled = true;
//         isStarted = false;
//         clearInterval(timer);
//       }
//     }, 1000);
//   } else {
//     //타이머가 작동중 일 때
//   }
// };

let isStarted = false;

const auth = () => {
  // 인증확인 버튼 활성화
  document.getElementById("finish").disabled = false;

  if (isStarted !== false) clearInterval(isStarted);
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.getElementById("target").innerText = token;
  let time = 180;
  processID = setInterval(function () {
    if (time < 0 || document.getElementById("start").disabled) {
      clearInterval(isStarted);
      initButton();
      return;
    }
    let mm = String(Math.floor(time / 60)).padStart(2, "0");
    let ss = String(time % 60).padStart(2, "0");
    let result = mm + ":" + ss;
    document.getElementById("timer").innerText = result;
    time--;
  }, 1000);
};

function authComplete() {
  alert("인증이 완료되었습니다.");
  buttonStart();
  document.getElementById("finish").innerHTML = "인증완료";
  document.getElementById("buttonText").disabled = false;
  document
    .getElementById("buttonText")
    .setAttribute("style", "background-color:white;");
}

function signUpCheck() {
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let passwordCheck = document.getElementById("passwordCheck").value;
  let area = document.getElementById("area").value;
  let gender_man = document.getElementById("man").checked;
  let gender_woman = document.getElementById("woman").checked;
  let check = true;

  // 이메일 확인
  if (email.includes("@")) {
    let emailId = email.split("@")[0];
    let emailServer = email.split("@")[1];
    if (emailId === "" || emailServer === "") {
      document.getElementById("emailError").innerHTML =
        "이메일이 올바르지 않습니다.";
      check = false;
    } else {
      document.getElementById("emailError").innerHTML = "";
    }
  } else {
    document.getElementById("emailError").innerHTML =
      "이메일이 올바르지 않습니다.";
    check = false;
  }

  // 이름 확인
  if (name === "") {
    document.getElementById("nameError").innerHTML =
      "이름이 올바르지 않습니다.";
    check = false;
  } else {
    document.getElementById("nameError").innerHTML = "";
  }

  // 비밀번호 확인
  if (password !== passwordCheck) {
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("passwordCheckError").innerHTML =
      "비밀번호가 동일하지 않습니다.";
    check = false;
  } else {
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("passwordCheckError").innerHTML = "";
  }

  if (password === "") {
    document.getElementById("passwordError").innerHTML =
      "비밀번호를 입력해주세요.";
    check = false;
  } else {
  }
  if (passwordCheck === "") {
    document.getElementById("passwordCheckError").innerHTML =
      "비밀번호를 다시 입력해주세요.";
    check = false;
  } else {
  }

  // 지역 확인
  if (area === "지역을 선택하세요.") {
    document.getElementById("areaError").innerHTML = "지역을 선택해주세요.";
    check = false;
  } else {
    document.getElementById("areaError").innerHTML = "";
  }

  // 성별 확인
  if (!man && !woman) {
    document.getElementById("genderError").innerHTML = "성별을 선택해주세요.";
    check = false;
  } else {
    document.getElementById("genderError").innerHTML = "";
  }

  if (check) {
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("passwordCheckError").innerHTML = "";
    document.getElementById("areaError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";
    signIn(function () {
      alert("코드캠프 가입을 축하합니다.");
    }, 0);
  }
}
