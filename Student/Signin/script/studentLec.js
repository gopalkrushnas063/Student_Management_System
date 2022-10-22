let arr=JSON.parse(localStorage.getItem("Lectures")) || []
display(arr)



function display(arr)
{
    console.log(arr)
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
       
        row.append(td1,td2,td4)
        cont.append(row)
    })
}
