// JavaScript Notes

document = notes.html
function hello(){
    let name = window.prompt("what is your name?", "you better type your name")
    document.getElementById("title").
    innerHTML = "hello " + name + "!"
}
function change(){
    document.getElementById("img").src = "https://utahhikingbeauty.com/wp-content/uploads/2020/07/Mount-Timpanogos-Aspen-Grove-Waterfall-Emerald-Lake-1.jpg"
}

function highlight(){
    document.getElementById("btn").style.backgroundColor ="orange"
     document.getElementById("btn").style.color ="white"
}
function normal(){
     document.getElementById("btn").style.backgroundColor ="gray"
     document.getElementById("btn").style.color ="black"
}
function push(){
     document.getElementById("btn").style.backgroundColor ="red"

}
function show(){
    document.getElementById("hidden").style.display = "block"
}
function pop(){
    window.alert("im omniing it with omni dih!")
}
function more(){
    if(document.getElementById("extra").style.display != "flex")
        {document.getElementById("extra").style.display = "flex"
    document.getElementById("shw").innerHTML = "show less"

    }else{
        document.getElementById("extra").style.display = "none"
    document.getElementById("shw").innerHTML = "show more"
    }
}
