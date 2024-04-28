let store;
//  for fetching the data
async function fetchData(url){
    const res= await fetch(url)
    
    const data=await res.json()

    store = data
    console.log(data)
    showData(data)
    
    // store=finalres.data
    // console.log(store)
   
}

// adding the data in table body

let table=document.getElementById("table1")
function showData(arr){
    arr.map(function(ele){
        let thead=document.createElement("thead")

        let tr=document.createElement("tr")

        let td1=document.createElement("th")
        td1.textContent=ele.id

        let td2=document.createElement("th")
        td2.textContent=ele.name

        let td3=document.createElement("th")
        td3.textContent=ele.gender

        let td4=document.createElement("td")
        td4.textContent=ele.department

        let td5=document.createElement("td")
        td5.textContent=ele.salary
        tr.append(td1,td2,td3,td4,td5)
        thead.append(tr)
        table.append(thead)
    })
}

 fetchData("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")