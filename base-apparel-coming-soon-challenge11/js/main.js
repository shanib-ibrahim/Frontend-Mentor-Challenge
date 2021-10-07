const arrowButton = document.querySelector(".arrow");
const errorIcon = document.querySelector(".error");
const errorMessage = document.querySelector(".error-msg");
const emailTextBox = document.querySelector(
  ".apparel__content--wrapperDescription--child3"
);

const email = document.querySelector(".email");

const validateEmail = (email) => {
  const emailTest =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailTest.test(String(email).toLowerCase());
};

arrowButton.addEventListener("click", function () {
  arrowButton.style.background =
    " linear-gradient(135deg, hsl(0, 0%, 100%), #ffc1c1)";
  arrowButton.style.boxShadow =
    "hsl(0, 80%, 86%) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px";
  if (email.value === "") {
    errorIcon.classList.remove("hidden");
    errorMessage.classList.remove("hidden");
    errorMessage.textContent = "Please enter email address";
    emailTextBox.style.border = "none";
    emailTextBox.style.borderLeft = "2px solid hsl(0, 93%, 68%)";
    emailTextBox.style.borderTop = "2px solid hsl(0, 93%, 68%)";
    emailTextBox.style.borderBottom = "2px solid hsl(0, 93%, 68%)";
  } else if (!validateEmail(email.value)) {
    errorIcon.classList.remove("hidden");
    errorMessage.classList.remove("hidden");
    errorMessage.textContent = "Please Provide a valid email";
    emailTextBox.style.borderLeft = "2px solid hsl(0, 93%, 68%)";
    emailTextBox.style.borderTop = "2px solid hsl(0, 93%, 68%)";
    emailTextBox.style.borderBottom = "2px solid hsl(0, 93%, 68%)";
  }
});

email.addEventListener("keydown", function () {
  arrowButton.style.background = "";
  arrowButton.style.boxShadow = "";
  errorIcon.classList.add("hidden");
  errorMessage.classList.add("hidden");
  emailTextBox.style.border = "none";
  emailTextBox.style.borderLeft = "1px solid hsl(0, 6%, 24%)";
  emailTextBox.style.borderTop = "1px solid hsl(0, 6%, 24%)";
  emailTextBox.style.borderBottom = "1px solid hsl(0, 6%, 24%)";
});
