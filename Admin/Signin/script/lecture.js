let arr=JSON.parse(localStorage.getItem("Lectures")) || []
display(arr)

document.querySelector("#btn").addEventListener("click",fun)
class getValue{
    constructor(name,des,link)
    {
        this.Name=name;
        this.Des=des;
        this.Link=link
    }
}


function fun(event)
{
    event.preventDefault()
    let name=document.querySelector("#name").value
    let des=document.querySelector("#des").value
    let link=document.querySelector("#link").value
    arr.push(new getValue(name,des,link))
    console.log(arr)
    localStorage.setItem("Lectures",JSON.stringify(arr))
    
    display(arr)

}

function display(arr)
{
    let cont=document.querySelector("#lec")
    cont.innerHTML=""

    arr.forEach((element,i)=>{
        let {Name,Des,Link}=element
        let row=document.createElement("tr")
        let td1=document.createElement("td")
        td1.innerText=Name
        let td2=document.createElement("td")
        td2.innerText=Des
        let td4=document.createElement("td")
        td4.innerText=Link
        let td3=document.createElement("td")
        td3.innerText="Delete"
        td3.addEventListener("click",()=>{
            DeleteIt(i)
        })
        row.append(td1,td2,td4,td3)
        cont.append(row)
    })
}

function DeleteIt(index){
    arr.splice(index,1)
    localStorage.setItem("Lectures",JSON.stringify(arr))

    display(arr)
}