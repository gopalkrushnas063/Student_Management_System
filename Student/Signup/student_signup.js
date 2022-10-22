class Student {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  signup(email, password) {
    let isValidated = false;

    isValidated = this.#validateEmail(email) && this.#validatePassword(password);

    if(isValidated){
        this.email = email;
        this.password = password;
        alert("User registered successfully!");
    }else{
        alert("Please follow username or password rules");
    }
  }

  #validateEmail(email) {
    return true;
  }

  #validatePassword(password) {
    return true;
  }
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  let form = document.querySelector("form");

  let name = form.name.value;
  let email = form.mail.value;
  let password = form.pwd.value;

  let s1 = new Student(name, email, password);

  let studentData =JSON.parse(localStorage.getItem('StudentDB')) || [];
  studentData.push(s1);
  s1.signup(email,password);
  localStorage.setItem('StudentDB',JSON.stringify(studentData))
  
  console.log(s1);
});
