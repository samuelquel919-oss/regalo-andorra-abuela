function empezar(){

    document.getElementById("inicio")
    .classList.add("oculto");


    document.getElementById("fotos")
    .classList.remove("oculto");


}



function revelar(){


    document.getElementById("fotos")
    .classList.add("oculto");


    document.getElementById("regalo")
    .classList.remove("oculto");


    confeti();


}



function confeti(){

    for(let i=0;i<80;i++){


        let estrella=document.createElement("div");


        estrella.innerHTML="❄️";


        estrella.style.position="fixed";

        estrella.style.left=
        Math.random()*100+"vw";


        estrella.style.top="-20px";


        estrella.style.fontSize=
        Math.random()*30+10+"px";


        estrella.style.animation=
        "caer 5s linear";


        document.body.appendChild(estrella);



        setTimeout(()=>{

            estrella.remove();

        },5000);



    }


}
