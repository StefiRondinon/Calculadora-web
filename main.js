let screen = document.querySelector("#respuestas");

function valor(referencia){
    let value = referencia;
    screen.value += value;
}

function clean(){
    screen.value = '';
}

function calculate(){
    try{
        screen.value = eval(screen.value);
    } 
    catch(error){
        screen.value = 'Syntax error'
        screen.value = '';

    }
}


