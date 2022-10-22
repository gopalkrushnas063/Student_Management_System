let arr=JSON.parse(localStorage.getItem("Assignments")) || []
display(arr)






function display(arr)
{
    let cont=document.querySelector("#assign")
    cont.innerHTML=""
console.log(arr)
    arr.forEach((element,i)=>{
        let {Name,Des}=element
        let row=document.createElement("tr")
        let td1=document.createElement("td")
        td1.innerText=Name
        let td2=document.createElement("td")
        td2.innerText=Des
       
       
        row.append(td1,td2)
        cont.append(row)
    })
}
