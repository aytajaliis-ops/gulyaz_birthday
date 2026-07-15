function showMessage(){

    document.getElementById("message").style.display="block";

    flowers();
    hearts();

}

function flowers(){

    for(let i=0;i<40;i++){

        let flower=document.createElement("div");

        flower.className="flower";
        flower.innerHTML="🌸";

        flower.style.left=Math.random()*100+"vw";
        flower.style.fontSize=(20+Math.random()*20)+"px";
        flower.style.animationDuration=(3+Math.random()*3)+"s";

        document.body.appendChild(flower);

        setTimeout(()=>{
            flower.remove();
        },6000);

    }

}

function hearts(){

    const emojis=["❤️","💖","💕","💗","💝"];

    for(let i=0;i<30;i++){

        let heart=document.createElement("div");

        heart.className="heart";
        heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

        heart.style.left=Math.random()*100+"vw";
        heart.style.fontSize=(18+Math.random()*20)+"px";
        heart.style.animationDuration=(4+Math.random()*3)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },7000);

    }

}
