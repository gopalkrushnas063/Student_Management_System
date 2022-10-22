let nm, uid, email, password, designation;
document
  .getElementById("user_form")
  .addEventListener("submit", userRegFunction);

class User {
  constructor() {}
    isValidate(nm, uid, email, password, designation) {
        let validateDetails = this.checkDetails(email, password);
        if (validateDetails) {
            this.name=nm;
            this.uid =uid;
            this.email = email;
            this.password = password;
            this.designation = designation;
        }
    }

    checkDetails(email, password) {
        let flag = 0;
        for (let i = 0; i < email.length; i++){
            if (email[i] == '@') {
                flag = 1;
            }
        }
        if (flag === 0) {
            alert('Kindly enter valid email');
        } else if (flag == 1) {
            return true;
        }
    }
}

class Student extends User{
    constructor() {
        super();
    }
    

}

class Admin extends User{
    constructor() {
        super();
   }
   

}


function userRegFunction(event) {
    event.preventDefault(event);
    nm = document.getElementById('name').value;
    email = document.getElementById('email').value;
    uid = document.getElementById('uid').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    designation = document.getElementById('designation').value;


    if (designation === 'student') {
        let studentLS = JSON.parse(localStorage.getItem('StudentDB')) || [];
        let s1 = new Student();
        s1.isValidate(nm, uid, email, password, designation);
        studentLS.push(s1);
        localStorage.setItem('StudentDB', JSON.stringify(studentLS));
        console.log(studentLS);
        alert('Registration Successfully Done')
        window.location.reload();
    } else {
        let adminLS = JSON.parse(localStorage.getItem('AdminDB')) || [];
        let a1 = new Admin();
        a1.isValidate(nm, uid, email, password, designation);
        adminLS.push(a1);
        localStorage.setItem('adminDB', JSON.stringify(adminLS));
        console.log(adminLS);
        alert('Registration Successfully Done')
        window.location.reload();
    }
}