// let container = document.getElementById("container")

// let countrydata = async()=>{
//   try
//   {
//         const res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries")
//         const data = await res.json()
//         // console.log(data)
//         fetchdata(data.data)
        
//     }catch(err){
//         console.log(err)
//     } 
    
// };

// function fetchdata(country){
//     // country.forEach(function(el){

//         let  divcontainer = document.createElement("div")
        
//         let countryname = document.createElement("h3")
//         countryname.textContent = country.country
//         divcontainer.append(countryname)
        
//         let population = document.createElement("p")
//         population.textContent = `population ${country.population}`
//         divcontainer.append(population)
        
        
//         container.append(divcontainer)
//     // })
        
        
//     }
    
//     countrydata()



let cont=document.getElementById('container')

let selected=document.querySelector('#selected')

selected.addEventListener('change',function(event){
  let value=event.target.value
  fetchdata(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=${value}`)
})


const fetchdata=async (url)=>{
    let res=await fetch(url)
    let data=await res.json()
    countrydata(data.data)
}


function countrydata(arr){
    cont.innerHTML=""
    arr.forEach((ele)=>{
        let div=document.createElement('div')
        let h3=document.createElement('h3')

        h3.innerText=`CountryName: ${ele.country}`
        let h4=document.createElement('h4')
        
        h4.innerText=`Rank: ${ele.Rank}`
        let para=document.createElement('p')

        para.innerText=`Population: ${ele.population}`
        div.append(h3,h4,para)
        cont.append(div)
    })
    }

fetchdata("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries")

