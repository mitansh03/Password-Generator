const submitButton = document.getElementById("btn");
const passwordBox = document.getElementById("password");

/* const alphabets = '/([A-Z][a-z])\w+/g'
const num = '/([0-9])/g' */
const char = "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[^da-zA-Z]).{8,15}$";
const all = /* alphabets; + num + */ char;
const length = 12;
submitButton.addEventListener("click", () => {
  let password = "";
  /*   password += alphabets[Math.floor(Math.random() * alphabets.length)];
  password += num[Math.floor(Math.random() * num.length)]; */
  password += char[Math.floor(Math.random() * char.length)];

  while (length > password.length) {
    password += all[Math.floor(Math.random() * all.length)];
  }
  passwordBox.value = password;
});
