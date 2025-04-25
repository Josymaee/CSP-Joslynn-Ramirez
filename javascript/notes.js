//javascript notes

function show(){
    document.getElementById("oregon").style.display = "block"

}

function hello(){
    document.getElementById("title").innerHTML = "Hello World!"
}
function enter(){
    document.getElementById("btn").style.color = "white"
    document.getElementById("btn").style.backgroundColor="green"
}
function down(){
    document.getElementById("btn").style.backgroundcolor= "red"
}

let images = ["https://gardenandgun.com/wp-content/uploads/2024/02/Atlantic-Beach_Terry-Ward.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYrHIgUGNc8-i5zOU6CnX-IR_d9x0esyBoBfM6CSctg9QTPyita5GEfFzjdok5Vr-hKQ&usqp=CAU","https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1824,w_2736,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Oregon-best-beaches-summer-cape-kiwanda_2489076057_wzlhja.jpg"]
let counter = 0

function change (){
    if (counter < images.length){
    document.getElementById("img").
    src = images[counter]
    counter += 1
    }else{
        counter = 0
        docuement.getElementById ("img").src = images
        [counter]
    }
}
function hello(){
    let name = window.prompt("What is your name?", "Josy")
    document.getElementById("title").innerHTML = "Hello!" + name + "!"
}
function hover(){
    document.getElementById("img").srx = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Cape_may.jpg/500px-Cape_may.jpg"
}
function leave(){
    document.getElementById("img").srx = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQscYIB3DXqEvjTi5mV_ldX6p1zQ1LvAnYE9bB3SkgzKPFI1MjSC2nfgbRfKUW_ANS7TJ0&usqp=CAU"
}
function hidden(){
    document.getElementById ("oregon").style.display = "block"
}
function pop(){
    window.alert("Really don't click that!")
}
function show (){
    alert
document.getElementById("lost"). style.display
} 

function view(){
    if(document.getElementById("more").style.display==="block"){
    document.getElementById("more").style.display = "none"
    document.getElementById("shw").style.display = "Show more"
    }else{
        document.getElementById("more").style.display = "block"
        document.getElementById("shw").style.display = "Show less"
    }
}