// déclaration de score
let scoreme=0;
let scoreadv=0;

// déclaration des images des trois mouvements du jeux
let tab=["img/pr-player.png", "img/fl-player.png", "img/cs-player.png"];
let tab1=["img/pr-computer.png", "img/fl-computer.png", "img/cs-computer.png"];

// affichage du score et de l'émoji (l'image entre les scores) en cours du jeux
let affichage=document.getElementById("result");
let affmy=document.getElementById("myscore");
let affadv=document.getElementById("advscore");

// affichage de l'émoji et le score finals
let win=document.querySelector(".win");
let lose=document.querySelector(".lose");
let result=document.getElementById("winLose");

// affichage de l'image du chaque coup
let affichme=document.getElementById("player");
let affichadv=document.getElementById("computer");

// affichage des trois boutons du jeux
let btn=document.querySelector(".btn");

// affichage des boutons du start et restart
let btnStart=document.querySelector(".start");
let btnRestart=document.querySelector(".restart");

// display initial
affichme.style.display="none";
affichadv.style.display="none";

win.style.display="none";
lose.style.display="none";

btn.style.display="none";
btnRestart.style.display="none";

// fonction du jeux
function start(){
    affichme.style.display="flex";
    affichadv.style.display="flex";
    btn.style.display="flex";

    btnStart.style.display="none";

    affichme.style.backgroundImage="url("+tab[0]+")";
    affichadv.style.backgroundImage="url("+tab1[0]+")";

    document.getElementById("copyright").style.display="none";
}

    function choix(num){
        if(scoreadv<10 && scoreme<10){
            let choise=document.querySelectorAll(".click");
            let adv=parseInt(Math.random()*choise.length);

            affichme.style.backgroundImage="url("+tab[num]+")";
            affichadv.style.backgroundImage="url("+tab1[adv]+")";
    

            if(num==adv){
            affichage.src="img/again.png";
            }
            else{
            if(num==0){
                if(adv==1){     
                    affichage.src="img/dommage.png";
                    scoreadv++;
                    affadv.innerHTML=parseInt(scoreadv);
                }
                else{      
                    affichage.src="img/bravoo.png";
                    scoreme++;
                    affmy.innerHTML=parseInt(scoreme);
                }
            }
            if(num==1){
                if(adv==0){  
                    affichage.src="img/bravoo.png";
                    scoreme++;
                    affmy.innerHTML=parseInt(scoreme);
                }
                else{     
                    affichage.src="img/dommage.png";
                    scoreadv++;
                    affadv.innerHTML=parseInt(scoreadv);
                }
            }
            if(num==2){
                if(adv==0){    
                    affichage.src="img/dommage.png";
                    scoreadv++;
                    affadv.innerHTML=parseInt(scoreadv);
                }   
                else{    
                    affichage.src="img/bravoo.png";
                    scoreme++;
                    affmy.innerHTML=parseInt(scoreme);
                }
            }
            }
        }
        if(scoreadv==10 || scoreme==10){
            affichage.style.display="none";
            affichme.style.display="none";
            affichadv.style.display="none";
            btn.style.display="none";
            btnRestart.style.display="block";
            document.getElementById("copyright").style.display="block";
            if(scoreme>scoreadv){
                win.style.display="block";
                result.innerHTML="You Win";
            }
            else{
                lose.style.display="block";
                result.innerHTML="You Lose";
            }

            btnRestart.onclick=function(){
                location.reload();
            }
        }
    }
