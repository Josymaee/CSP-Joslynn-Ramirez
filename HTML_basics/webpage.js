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
    document.getElementById("smtelse").src = "https://www.investopedia.com/thmb/Q0NCXv1iSIi9edd36opDXvxvRRQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/income-inequality.asp-Final-274ca61a88f043e1b2f1ce02167fe944.jpg"
}
