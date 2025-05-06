//Javascript webpage
document = webpage.js

function more(){
    if(document.getElementById("extra").style.display != "flex")
        {document.getElementById("extra").style.display = "flex"
    document.getElementById("shw").innerHTML = "show less"

    }else{
        document.getElementById("extra").style.display = "none"
    document.getElementById("shw").innerHTML = "show more"
    }
}
function change(){
    document.getElementById("smtelse").src = "https://static.vecteezy.com/system/resources/previews/002/118/311/non_2x/economic-inequality-rich-and-poor-gap-unfairness-income-concept-vector.jpg"
}
