let studentArr=JSON.parse(localStorage.getItem("StudentDB"))
console.log(studentArr)

display(studentArr)

function display(studentArr){

    let cont=document.querySelector("#studentBody")
    console.log(cont)
    cont.innerHTML=""

    studentArr.forEach((element,i)=>{
        let {name,email,password}=element
        let row=document.createElement("tr")
        let td1=document.createElement("td")
        td1.innerText=name

        let td3=document.createElement("td")
        td3.innerText=email
        let td4=document.createElement("td")
        td4.innerText=password
        let td5=document.createElement("td")
        td5.innerText="Remove"
        td5.style.backgroundColor = "red"
        td5.style.cursor = 'pointer'
        td5.addEventListener("click",()=>{
            remove(i)
        })
        row.append(td1,td3,td4,td5)
        cont.append(row)
    })

}

function remove(index)

{
    console.log('index', index)
    studentArr.splice(index,1)
    localStorage.setItem("StudentDB",JSON.stringify(studentArr))
    display(studentArr)
}