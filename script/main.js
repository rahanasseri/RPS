let emtiaz=0;
let computer=0; 
var bazikon = document.getElementById("bazikon");
var natije = document.getElementById("natije");
var kaghaz= document.getElementById("kaghaz"); 
var scissor= document.getElementById("scissor"); 
var sang= document.getElementById("sang");
var pc=document.getElementById("pc-choosed")



    bazikon.addEventListener("click",(e)=>{
        const randomNumber=Math.floor(Math.random() * (3 - 1 + 1)) + 1;

        if (kaghaz.checked || sang.checked || scissor.checked){
            switch(randomNumber) {
                case 1:
                    pc.innerText="Computer : kaghaz";
                break;
                case 2:
                    pc.innerText="Computer : Scissor";
                break;
                case 3:
                    pc.innerText="Computer : sang";
                break;
            }
        }
        
        if(kaghaz.checked){
            if(randomNumber==1){
                natije.innerText="draw";
                natije.classList="text-center text-white mt-5 pt-5 text-warning";
            } else if(randomNumber==2){
                natije.innerText="lost";
                natije.classList=" text-center mt-5 pt-5 text-danger";
                computer = computer + 1;
            } else if(randomNumber==3){
                natije.innerText="won";
                natije.classList="text-center mt-5 pt-5 text-success";
                emtiaz = emtiaz + 1;
            }



        } else if (sang.checked){
            if(randomNumber==1){
                natije.innerText="lost";
                natije.classList="text-center mt-5 pt-5 text-danger";
                computer = computer + 1;
            } else if(randomNumber==2){
                natije.innerText="win";
                natije.classList="text-center mt-5 pt-5 text-success";
                emtiaz = emtiaz + 1;
            }else  if(randomNumber==3){
                natije.innerText="draw";
                natije.classList="text-center mt-5 pt-5 text-warning";
            }
        } 
        
        else if (scissor.checked) {
            if(randomNumber==1){
                natije.innerText="won";
                natije.classList="text-center mt-5 pt-5 text-success";
                emtiaz = emtiaz + 1;
            }else if(randomNumber==2){
                natije.innerText="draw";
                natije.classList="text-center mt-5 pt-5 text-warning";

            } else if(randomNumber==3){
                natije.innerText="lost";
                natije.classList="text-center mt-5 pt-5text-danger";
                computer = computer + 1;
            }


            
            }
            
            score.innerText=`You ${emtiaz} :: ${computer} AI`;
            sang.checked=false;
            scissor.checked=false;
            kaghaz.checked=false;

    } )
