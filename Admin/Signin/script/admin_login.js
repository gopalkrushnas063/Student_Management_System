let AdminData = JSON.parse(localStorage.getItem("adminDB")) || [];
console.log('AdminData', AdminData)

document.querySelector('form').addEventListener('submit', adminFunction);

function adminFunction(event) {
  event.preventDefault()
  let Email = document.getElementById('email').value;
  let Password = document.getElementById('pwdd').value;
  let flag = 0;
  AdminData.forEach(el => {
    let { email, password } = el;
    if (Email == email && Password == password) {
      alert('Login Successfully...!');
      flag = 1;
      window.location.href = 'admin.html';
    }
  });
  if (flag == 0) {
    alert('Invalid Credential');
  }
}