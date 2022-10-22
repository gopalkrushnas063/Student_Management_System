let arr=JSON.parse(localStorage.getItem("Assignments")) || []
display(arr)

document.querySelector("#btn").addEventListener("click",fun)
class getValue{
    constructor(name,des)
    {
        this.Name=name;
        this.Des=des
    }
}


function fun(event)
{
    event.preventDefault()
    let name=document.querySelector("#name").value
    let des=document.querySelector("#des").value
    arr.push(new getValue(name,des))
    console.log(arr)
    localStorage.setItem("Assignments",JSON.stringify(arr))
    
    display(arr)

}

function display(arr)
{
    let cont=document.querySelector("#assign")
    cont.innerHTML=""

    arr.forEach((element,i)=>{
        let {Name,Des}=element
        let row=document.createElement("tr")
        let td1=document.createElement("td")
        td1.innerText=Name
        let td2=document.createElement("td")
        td2.innerText=Des
        let td3=document.createElement("td")
        td3.innerText="Delete"
        td3.addEventListener("click",()=>{
            DeleteIt(i)
        })
        row.append(td1,td2,td3)
        cont.append(row)
    })
}

function DeleteIt(index){
    arr.splice(index,1)
    localStorage.setItem("Assignments",JSON.stringify(arr))

    display(arr)
}