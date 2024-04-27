let container = document.getElementById("container")
let clothcat = document.getElementById("clothing")
let pricing = document .getElementById("pricing")

pricing.addEventListener("change",function(event){
    let value =event.target.value
    getdata(`https://fakestoreapi.com/products=${value}`)
})

let getdata = async(url)=>{
    let res = await fetch(url)
    let data = await res.json()
    // console.log(data)
    fetchdata(data)
}

function fetchdata(arr){
    arr.map((el)=>{
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

getdata("https://fakestoreapi.com/products")