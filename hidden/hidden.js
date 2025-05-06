function more(){
    if(document.getElementById("do").style.display != "flex")
        {document.getElementById("do").style.display = "flex"
    document.getElementById("shw").innerHTML = "show less"

    }else{
        document.getElementById("do").style.display = "none"
    document.getElementById("shw").innerHTML = "show more"
    }
}
