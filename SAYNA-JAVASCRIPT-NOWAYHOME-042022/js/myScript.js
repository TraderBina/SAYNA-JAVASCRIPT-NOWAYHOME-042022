let btnHover = document.getElementsByClassName("button1");
// getElementsByClassName pour avoir un tableau de tous les .button1



for (let i = 0 ; i<btnHover.length;i++){
    
    btnHover[i].addEventListener("mouseover", ()=>{
        btnHover[i].style.backgroundColor = "#b11313";
        btnHover[i].style.color = "white";
    })
    btnHover[i].addEventListener("mouseout", ()=>{
        btnHover[i].style.backgroundColor = "white";
        btnHover[i].style.color = "#b11313";
    })
}


// menu underlined
let line = document.querySelectorAll('li');

for (let j = 0; j<line.length; j++){
    line[j].addEventListener("mouseover", ()=>{
        line[j].style.textDecoration = "line-through";
    })
    line[j].addEventListener("mouseout", ()=>{
        line[j].style.textDecoration = "";
    })
}

// fade in des titres
$(document).ready(()=>{
    $(".box").animate({
        left:'20px'
        
    }, "slow");
    $(".description").fadeIn(5500);
})

// fadeIn Spidermen text
$(document).ready(()=>{
    $(".card-text").fadeIn(5000);
})