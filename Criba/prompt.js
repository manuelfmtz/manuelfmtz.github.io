//Array donde se guiarda los numero que están ocupados
var numOcupados=[];
///Array de nuemeros primos
var numPrimos=[];

//declaro las variables que van a contener a mis elementos  
//ubicados en el DOM, con los que trabajaré
let btnMult2 = document.getElementById("btnMult2");
let btnMult3 = document.getElementById("btnMult3");
let btnMult4 = document.getElementById("btnMult4");
let btnMult5 = document.getElementById("btnMult5");
let btnMult6 = document.getElementById("btnMult6");
let btnMult7 = document.getElementById("btnMult7");
let btnMult8 = document.getElementById("btnMult8");
let btnMult9 = document.getElementById("btnMult9");
let btnPrimos = document.getElementById("btnPrimos");
let btnLimpiar = document.getElementById("btnLimpiar");





//Creas mensaje emergente que solicita el valor inicial (Prompt) y lo guarda en la variable num
var num = prompt("Indica un número mayor o igual a 20:");
//Validaciín del numero introducido, debe de ser mayor o igual a 20
if(num >= 20){
	//Llamado de funcion que agrega los botones al DOM
   makeButton();
}else{

}

////////////////////////////////////////////////////////////////////////////////////////////////////////7777
//Funcion que construlle botones y los agrega al DOM
function makeButton(){

	//Ciclo for que determina la cantidad de botones que se deberán construir
    for(i=1; i <= num; i++){
    
    	//En button se guarda la sentencia que indica "crear un elemento de tipo entrada"
        let button = document.createElement("input");
    	//Asignacion de un id al elemento de tipo entrada
        button.id = "button_"+i;
    	//Se le indica que el elemento de tipo input será un Botón
        button.type = "button";
    	//Texto que tendrá el boton
        button.value = ""+i;
    	//Asignación del nombre de la clase a la que pertenecerá ese botón
        button.className = "celda";
        
    	//"DENTRO DEL ELEMENTO mbutton UBICADO EN EL DOM, CREA UN ELEMENTO... button es la variable que tiene el comando para crear el botón"
        document.getElementById("mbutton").appendChild(button);
    }
   }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Se crea un evento onclick en el boton btnMult2
btnMult2.onclick = function(){
	//La funcion multiplo la reutilizaremos, solo le mandamos el multiplo y el color que queremos que se coloree el boton
	multiplos(2,"#994d00");
}

btnMult3.onclick = function(){
	multiplos(3,"#3399ff");
}

btnMult4.onclick = function(){
	multiplos(4,"#9900cc");
}

btnMult5.onclick = function(){
	multiplos(5,"#009933");
}

btnMult6.onclick = function(){
	multiplos(6,"#ccff66");
}

btnMult7.onclick = function(){
	multiplos(7,"#ffffcc");
}

btnMult8.onclick = function(){
	multiplos(8,"#ff0066");
}

btnMult9.onclick = function(){
	multiplos(9,"#ffcccc");
}

//Calcula todos los numeros primos
btnPrimos.onclick = function(){ 
   primos();
}

//Restablece el color inicial de todos los botones
btnLimpiar.onclick = function(){
    for(i=1; i <= num; i++){
            document.getElementById("button_"+i).style.backgroundColor = "#E7552C";
            document.getElementById("button_"+i).style.color = "#000000";
            numOcupados.splice(0,num);
            numPrimos.splice(0,num);
    }
    
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//recivimos el numero multiplo y el color que queremos que tome el boton
function multiplos(nuMultiplo,color){
	//El primer for recorrerá TODOS los botones que se crearon, uno por uno.
	for(i=1; i <= num; i++){
    	//Si i en la iteración tiene como residuo 0 y no se encuentra incluido dentro del arreglo numOcupados...
        if(i % nuMultiplo == 0 && numOcupados.includes(i) == false){
        	//... Le asigna un estilo nuevo al boton
            document.getElementById("button_"+i).style.backgroundColor = color;
            //y agrega el valor de i al arreglo numOcupado.
            numOcupados.push(i);
        }
    }
}


function primos(){
let contador = 0;
let numActual = 0;
let numd = 0;

	 for(i=2; i <= num; i++){
        numActual = i;    
        for(j = 1; j <= numActual; j++){
           
            if(i % j == 0){
                contador++;
            }
        }
        if(contador == 2 && numPrimos.includes(i) == false){
            contador = 0;
            document.getElementById("button_"+i).style.backgroundColor = "#2E4053";
            document.getElementById("button_"+i).style.color = "#ffffff";
            numPrimos.push(i);
            numOcupados.push(i);
        }else if(contador > 2){
            contador = 0;
        }       
    }
}


