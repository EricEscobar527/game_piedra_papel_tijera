const piedra = "piedra";
const papel = "papel";
const tijeras = "tijeras";

const TIE = 0;
const WIN = 1;
const LOST = 2;

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijerasBtn = document.getElementById("tijeras");
const resultText = document.getElementById("texto");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

piedraBtn.addEventListener("click", ()=>{
    play(piedra);
});
papelBtn.addEventListener("click", ()=>{
    play(papel);
});
tijerasBtn.addEventListener("click", ()=>{
    play(tijeras);
});

function play(userOption){

userImg.src = "imagenes/"+userOption+".png";
resultText.innerHTML = "Pensando";

const interval = setInterval(function(){
    const machineOption = calcMachineOption();
    machineImg.src = "imagenes/"+machineOption+".png";
}, 100);

setTimeout(function(){
clearInterval(interval);

    const machineOption = calcMachineOption();
    const result = calResult(userOption, machineOption);
    
    machineImg.src = "imagenes/"+machineOption+".png";
    
    switch(result){
    case TIE:
        resultText.innerHTML = "Has empatado";
        break;
    
    case WIN:
        resultText.innerHTML = "Has ganado";
        break;
            
    case LOST:
        resultText.innerHTML = "Has perdido";
        break;
    }
}, 2000);

}

function calcMachineOption(){
    const number = Math.floor(Math.random() * 3);
    switch(number){
        case 0:
            return piedra;
        case 1:
            return papel;
        case 2:
            return tijeras;
    }
}

function calResult(userOption, machineOption){

    if(userOption === machineOption){
        return TIE;
    }
    
    else if(userOption === piedra){
        if(machineOption === papel) return LOST;
        if(machineOption === tijeras) return WIN;
    }
    
    else if(userOption === papel){
        if(machineOption === tijeras) return LOST;
        if(machineOption === piedra) return WIN;
    }
    else if(userOption === tijeras){
        if(machineOption === piedra) return LOST;
        if(machineOption === papel) return WIN;
    }

}