const step1 = document.querySelector(".st-1"),
  step2 = document.querySelector(".st-2"),
  step3 = document.querySelector(".st-3"),
  emailAddress = document.getElementsByClassName("emailAddress"),
  verifyEmail = document.getElementById(" verifyEmail"),
  inputs = document.querySelectorAll(".otp-group input"),
  nextButton = document.querySelector(".nextButton"),
  verifyButton = document.querySelector(".verifyButton");
  let OTP="";

window.addEventListener("load", () => {
  emailjs.init("kRLjmWxfEXCZYOYt4");

  step2.style.display = "none";
  step3.style.display = "none";
  nextButton.classList.add("disable");
  verifyButton.classList.add("disable");
});
const genrateOtp = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

inputs.forEach((input) => {
  input.addEventListener("keyup", function (e) {
    if (this.value.length >= 1) {
      e.target.value = e.target.value.substr(0, 1);
    }
    if (
      inputs[0].value != "" &&
      inputs[1].value != "" &&
      inputs[2].value != "" &&
      inputs[3].value != ""
    ) {
      verifyButton.classList.remove("disable");
    } else {
      verifyButton.classList.add("disable");
    }
  });
});

console.log(genrateOtp());

const serviceId = "service_jq56d48";
const templateId = "template_bbmhn0m";

nextButton.addEventListener("click", () => {
  OTP=genrateOtp(),
  nextButton.innerHTML = "&#9889;Sending....";
  let templateparameter = {
    from_name: "Sumit Mathpal Company",
    OTP: OTP,
    message: "Please find out the attached file",
    reply_to: "emailAddress.value",
  };
  emailjs.send(serviceId, templateId, templateparameter).then(
    (res) => {
      console.log(res);
      nextButton.innerHTML = "Next &rarr;";
      step1.style.display = "none";
      step2.style.display = "block";
      step3.style.display = "none";
    },
    (err) => {
      console.log(err);
    }
  );
});

const validEmail = (email) => {
  let re = /\S+@\S+\.\S+/;
  if (re.test(email)) {
    nextButton.classList.remove("disable");
  } else {
    nextButton.classList.add("disable");
  }
};

verifyButton.addEventListener("click", () => {
  let values = "";
  inputs.forEach((input) => {
    console.log(input.value);
    values += input.value;
  });


if(OTP == values){
  step1.style.display = "none";
  step2.style.display = "none";
  step3.style.display = "block"; 
}else{
  verifyButton.classList.add("error-shake");
  setTimeout(() => {
    verifyButton.classList.remove("error-shake");
  },1000);
}
});

function changeMyEmail(){
  step1.style.display = "block";
  step2.style.display = "none";
  step3.style.display = "none"; 
  inputs.innerHTML="none";
}
// console.log(step1);
// console.log(step2);
// console.log(step3);
// console.log(emailAdress);
// console.log( verifyEmail);
// console.log(input);
// console.log(nextButton);
// console.log(verifyButton);
// console.log("hello")
