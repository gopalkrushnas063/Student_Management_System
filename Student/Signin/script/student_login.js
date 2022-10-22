let studentData = JSON.parse(localStorage.getItem("StudentDB")) || [];
console.log("studentData", studentData);

document.querySelector('form').addEventListener('submit', studentFunction);

function studentFunction(event) {
  event.preventDefault()
  let Email = document.getElementById('email').value;
  let Password = document.getElementById('pwdd').value;
  let flag = 0;
  studentData.forEach(el => {
    let { email, password } = el;
    if (Email == email && Password == password) {
      alert('Login Successfully...!');
      flag = 1;
      window.location.href = 'studentAssignment.html';
    }
  });
  if (flag == 0) {
    alert('Invalid Credential');
  }
}