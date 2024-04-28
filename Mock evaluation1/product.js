let container = document.getElementById("container")
let clothcat = document.getElementById("clothing")
let pricing = document .getElementById("pricing")
let input = document .getElementById("input")
let got


let getdata = async(url)=>{
    let res = await fetch(url)
    let data = await res.json()
    got = data
    // console.log(data)
    fetchdata(got)
}

function fetchdata(arr){
    container.innerHTML=""
    arr.forEach(function(el){
        let divpro = document.createElement("div")

        let img = document.createElement("img")
        img.src = el.image

        let title = document.createElement("h3")
        title.innerText = `title:-${el.title}`

        let  price = document.createElement("h3")
        price.innerText = `price:- ${el.price}`
        
        divpro.append(img,title,price)
        container.append(divpro)
    })

}
    //    category of cloths

clothcat.addEventListener("input",function(event){
            let value =event.target.value
            let get = got.filter(function(el,i){
                return value==el.category
            })
        
            fetchdata(get)
        })

// searching data from api
input.addEventListener("change",function(){
    let value = input.value;
    if(value!==""){

        let search = got.filter(function(el){
            return el.title.toLoweCase().includes(value.toLoweCase());
        })
        fetchdata(search)
    }

    else{
        fetchdata(got)
    }
})



        
getdata("https://fakestoreapi.com/products")