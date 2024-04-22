
let container= document.getElementById("container")

let data = fetch("https://jsonplaceholder.typicode.com/todos")
data.then(function(res){
    return res.json()
})

.then(function(todo){
    console.log(todo)
    showData(todo)
})

.catch(function(err){
    console.log(err)
})

function showData(todo){
    todo.forEach(function(el){
        let box = document.createElement("div")
        box.textContent = el.title
        container.appendChild(box)
    })
}




