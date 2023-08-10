var dropDown = window.document.getElementById("dropDown")

var mostrar1 = window.document.getElementById("mostrarMenu1")
var mostrar2 = window.document.getElementById("mostrarMenu2")
var mostrar3 = window.document.getElementById("mostrarMenu3")
var mostrar4 = window.document.getElementById("mostrarMenu4")

var menu1 = window.document.getElementById("menu1")
var menu2 = window.document.getElementById("menu2")
var menu3 = window.document.getElementById("menu3")
var menu4 = window.document.getElementById("menu4")
var barraC1 = window.document.getElementById("barraC1")
var barraC2 = window.document.getElementById("barraC2")
var barraC3 = window.document.getElementById("barraC3")
var barraC4 = window.document.getElementById("barraC4")


var perfilElves = window.document.getElementById('perfilElves')
var perfilElacio = window.document.getElementById('perfilElacio')
var iconCerto1 = window.document.getElementById('iconCerto1')
var iconCerto2 = window.document.getElementById('iconCerto2')


var head = window.document.getElementById("undifined")
var firsLi = window.document.getElementsByClassName("firsLi")
var marq = window.document.getElementById("marq")

var explicacao1 = window.document.getElementById("explicacao1")
var explicacao2 = window.document.getElementById("explicacao2")
var explicacao3 = window.document.getElementById("explicacao3")


var more1 = window.document.getElementById("more1")
var less1 = window.document.getElementById("less1")

var more2 = window.document.getElementById("more2")
var less2 = window.document.getElementById("less2")

var more3 = window.document.getElementById("more3")
var less3 = window.document.getElementById("less3")

var spanLinha1 = window.document.getElementById("spanLinha1")
var spanLinha2 = window.document.getElementById("spanLinha2")
var spanLinha3 = window.document.getElementById("spanLinha3")

var textoTecnico1 = window.document.getElementById("textoTecnico1")
var textoTecnico2 = window.document.getElementById("textoTecnico2")
var textoTecnico3 = window.document.getElementById("textoTecnico3")

var linked1 = window.document.getElementById("linked1")
var linked2 = window.document.getElementById("linked2")
var linked3 = window.document.getElementById("linked3")

var modal = window.document.getElementById("modal")
var modalDireito = window.document.getElementById("modalDireito")
var modalEsquerdo = window.document.getElementById("modalEsquerdo")
var suggustion = window.document.getElementById("suggustion")
var btnForm = window.document.getElementById("btnForm")
var btnForm2 = window.document.getElementById("btnForm2")
var fechar = window.document.getElementById("fechar")


// configuração do menu principal / botão Forms
dropDown.addEventListener('mouseover', visivel)
dropDown.addEventListener('mouseleave', invisivel)


function visivel(){
    dropDown.style.display = 'block'
}

function invisivel(){
    dropDown.style.display = 'none'
}



// configuração de Div menu*******************************************
mostrar1.addEventListener('click', mostrarMenu1)
mostrar2.addEventListener('click', mostrarMenu2)
mostrar3.addEventListener('click', mostrarMenu3)
mostrar4.addEventListener('click', mostrarMenu4)

function mostrarMenu1(){
    menu1.style.height = '35vh'
    menu2.style.height = '0vh'
    menu3.style.height = '0vh'
    menu4.style.height = '0vh'

    menu1.style.transition = '.05s'
    barraC1.style.display = 'block'
    barraC2.style.display = 'none'
    barraC3.style.display = 'none'
    barraC4.style.display = 'none'

    modal.style.backgroundColor = 'rgba(255,255,255,0.0)'
    modal.style.width = '0vw'
    modal.style.height = '0vh'
    modal.style.border = 'none'
    modalDireito.style.display = 'none'
    modalEsquerdo.style.display = 'none'
    btnForm.style.display = 'none'
    fechar.style.display = 'none'
    suggustion.style.display = 'none'
    btnForm2.style.display = 'none'
}
function mostrarMenu2(){
    menu1.style.height = '0vh'
    menu2.style.height = '35vh'
    menu3.style.height = '0vh'
    menu4.style.height = '0vh'

    menu2.style.transition = '.05s'
    barraC2.style.display = 'block'
    barraC1.style.display = 'none'
    barraC3.style.display = 'none'
    barraC4.style.display = 'none'

    modal.style.backgroundColor = 'rgba(255,255,255,0.0)'
    modal.style.width = '0vw'
    modal.style.height = '0vh'
    modal.style.border = 'none'
    modalDireito.style.display = 'none'
    modalEsquerdo.style.display = 'none'
    btnForm.style.display = 'none'
    fechar.style.display = 'none'
    suggustion.style.display = 'none'
    btnForm2.style.display = 'none'
}

function mostrarMenu3(){
    menu1.style.height = '0vh'
    menu2.style.height = '0vh'
    menu3.style.height = '35vh'
    menu4.style.height = '0vh'

    menu3.style.transition = '.05s'
    barraC3.style.display = 'block'
    barraC1.style.display = 'none'
    barraC2.style.display = 'none'
    barraC4.style.display = 'none'

    modal.style.backgroundColor = 'rgba(255,255,255,0.0)'
    modal.style.width = '0vw'
    modal.style.height = '0vh'
    modal.style.border = 'none'
    modalDireito.style.display = 'none'
    modalEsquerdo.style.display = 'none'
    btnForm.style.display = 'none'
    fechar.style.display = 'none'
    suggustion.style.display = 'none'
    btnForm2.style.display = 'none'
}

function mostrarMenu4(){
    menu1.style.height = '0vh'
    menu2.style.height = '0vh'
    menu3.style.height = '0vh'
    menu4.style.height = '35vh'

    menu4.style.transition= '.05s'
    barraC4.style.display = 'block'
    barraC3.style.display = 'none'
    barraC2.style.display = 'none'
    barraC1.style.display = 'none'

    modal.style.backgroundColor = 'rgba(255,255,255,0.0)'
    modal.style.width = '0vw'
    modal.style.height = '0vh'
    modal.style.border = 'none'
    modalDireito.style.display = 'none'
    modalEsquerdo.style.display = 'none'
    btnForm.style.display = 'none'
    fechar.style.display = 'none'
    suggustion.style.display = 'none'
    btnForm2.style.display = 'none'
}

function ocultarMenu(){
    menu1.style.height= '0vh'
    menu2.style.height= '0vh'
    menu3.style.height= '0vh'
    menu4.style.height= '0vh'
    barraC1.style.display = 'none'
    barraC2.style.display = 'none'
    barraC3.style.display = 'none'
    barraC4.style.display = 'none'

    modal.style.backgroundColor = 'rgba(255,255,255,0.0)'
    modal.style.width = '0vw'
    modal.style.height = '0vh'
    modal.style.border = 'none'
    modalDireito.style.display = 'none'
    modalEsquerdo.style.display = 'none'
    btnForm.style.display = 'none'
    suggustion.style.display = 'none'
    btnForm2.style.display = 'none'
    btnForm.style.display = 'none'
    fechar.style.display = 'none'

}

//Chamada de eventos (addEventListener) para os perfis
perfilElves.addEventListener('mouseover', mostrarCeta1)
perfilElacio.addEventListener('mouseover', mostrarCeta2)

perfilElves.addEventListener('mouseout', ocultarCeta1)
perfilElacio.addEventListener('mouseout', ocultarCeta2)

function progress(){
    alert('heeee... gentleman! hold on, the work is still in progress')
}

function SayHello(){
    modal.style.backgroundColor = 'rgba(255,255,255,0.0)'
    modal.style.width = '0vw'
    modal.style.height = '0vh'
    modal.style.border = 'none'
    modalDireito.style.display = 'none'
    modalEsquerdo.style.display = 'none'
    btnForm.style.display = 'none'
    fechar.style.display = 'none'
    suggustion.style.display = 'none'
    btnForm2.style.display = 'none'

    window.prompt('SayHello to Laundry:')
    
}

//Configuração de Modal
function showModal(){
    modal.style.backgroundColor = 'rgba(255,255,255,0.8)'
    modal.style.width = '75vw'
    modal.style.height = '60vh'
    modal.style.border = '1px solid red'
    modalDireito.style.display = 'block'
    modalEsquerdo.style.display = 'block'
    btnForm.style.display = 'block'
    btnForm2.style.display = 'none'
    fechar.style.display = 'block'
    fechar.style.backgroundColor = 'rgba(0,0,0,0.8)'
    fechar.style.borderRadius = '6px'
    suggustion.style.display = 'none'
    

}

function Suggustion(){
    suggustion.style.display = 'block'
    modal.style.backgroundColor = 'rgba(0,0,0,1)'
    modal.style.width = '75vw'
    modal.style.height = '60vh'
    modal.style.border = '1px solid red'
    btnForm.style.display = 'none'
    btnForm2.style.display = 'block'
    fechar.style.display = 'block'
    fechar.style.backgroundColor = '#fff'
    fechar.style.borderRadius = '6px'

    modalDireito.style.display = 'none'
    modalEsquerdo.style.display = 'none'
}

function hideModal(){
    modal.style.backgroundColor = 'rgba(255,255,255,0.0)'
    modal.style.width = '0vw'
    modal.style.height = '0vh'
    modal.style.border = 'none'
    modalDireito.style.display = 'none'
    modalEsquerdo.style.display = 'none'
    btnForm.style.display = 'none'
    fechar.style.display = 'none'
    suggustion.style.display = 'none'
    btnForm2.style.display = 'none'
}

function mostrarCeta1(){
    iconCerto1.style.opacity = '1'
    iconCerto1.style.transition = '2s'
}

function mostrarCeta2(){
    iconCerto2.style.opacity = '1'
    iconCerto2.style.transition = '2s'
}

function ocultarCeta1(){
    iconCerto1.style.opacity = '0'
    iconCerto1.style.transition = '0s'
}

function ocultarCeta2(){
    iconCerto2.style.opacity = '0'
    iconCerto2.style.transition = '0s'
}



/* codificação de paginas extra começando por aqui */
function hk(){
    marq.style.display = "inline-block"
    marq.innerText = "Housekeeping"
}
function fb(){
    marq.style.display = "inline-block"
    marq.innerText = "F&B"
}
function butler(){
    marq.style.display = "inline-block"
    marq.innerText = "Butler"
}
function aiport(){
    marq.style.display = "inline-block"
    marq.innerText = "Aiport"
}
function kitchen(){
    marq.style.display = "inline-block"
    marq.innerText = "Kitchen"
}
function activity(){
    marq.style.display = "inline-block"
    marq.innerText = "Activity"
}
function security(){
    marq.style.display = "inline-block"
    marq.innerText = "Security"
}
function landscap(){
    marq.style.display = "inline-block"
    marq.innerText = "LandScaping"
}
function maintenance(){
    marq.style.display = "inline-block"
    marq.innerText = "Maintenance"
}

function home(){
    marq.style.display = "none"
    menu1.style.height = '0vh'
    menu2.style.height = '0vh'
    menu3.style.height = '0vh'
    menu4.style.height = '0vh'

    barraC1.style.display = 'none'
    barraC2.style.display = 'none'
    barraC3.style.display = 'none'
    barraC4.style.display = 'none'
}

function mT1(){
    less1.style.display = "inline"
    less2.style.display = "none"
    less3.style.display = "none"
    more1.style.display ="none"
    more2.style.display ="inline"
    more3.style.display ="inline"

    explicacao1.style.height = "53vh"
    explicacao2.style.height = "7vh"
    explicacao3.style.height = "7vh"
    explicacao1.style.transition = ".8s"

    spanLinha1.style.borderBottom = "2px solid #fff"
    spanLinha2.style.borderBottom = "none"
    spanLinha3.style.borderBottom = "none"

    textoTecnico1.style.display = "inline"
    textoTecnico2.style.display = "inline"
    textoTecnico3.style.display = "inline"
    textoTecnico1.style.opacity = "1"
    textoTecnico2.style.opacity = "0"
    textoTecnico3.style.opacity = "0" 

    linked1.style.opacity = "1"
    linked2.style.opacity = "0"
    linked3.style.opacity = "0"

    textoTecnico1.style.transition = ".3s"
    textoTecnico2.style.transition = ".2s"
    textoTecnico3.style.transition = ".2s"
    textoTecnico1.style.transitionDelay = ".4s"
    textoTecnico2.style.transitionDelay = ".2s"
    textoTecnico3.style.transitionDelay = ".2s"

    linked1.style.transition = "4s"
    linked2.style.transition = "0s"
    linked3.style.transition = "0s"

    linked1.style.transitionDelay = ".4s"
    linked2.style.transitionDelay = ".0s"
    linked3.style.transitionDelay = ".0s"
}

function lT1(){
    less1.style.display = "none"
    more1.style.display ="inline"
    explicacao1.style.height = "7vh"
    spanLinha1.style.borderBottom = "none"
    textoTecnico1.style.opacity = "0"
    linked1.style.opacity = "0"

    linked1.style.transition = ".0s"
    linked2.style.transition = ".0s"
    linked3.style.transition = ".0s"

    linked1.style.transitionDelay = ".0s"
    linked2.style.transitionDelay = ".0s"
    linked3.style.transitionDelay = ".0s"
}


function mT2(){
    less2.style.display = "inline"
    less1.style.display = "none"
    less3.style.display = "none"
    more2.style.display ="none"
    more1.style.display ="inline"
    more3.style.display ="inline"

    
    explicacao2.style.height = "53vh"
    explicacao1.style.height = "7vh"
    explicacao3.style.height = "7vh"
    explicacao2.style.transition = ".8s"

    spanLinha2.style.borderBottom = "2px solid #fff"
    spanLinha3.style.borderBottom = "none"
    spanLinha1.style.borderBottom = "none"

    textoTecnico1.style.display = "inline"
    textoTecnico2.style.display = "inline"
    textoTecnico3.style.display = "inline"

    textoTecnico1.style.opacity = "0"
    textoTecnico2.style.opacity = "1"
    textoTecnico3.style.opacity = "0"

    linked1.style.opacity = "0"
    linked2.style.opacity = "1"
    linked3.style.opacity = "0"
    
    textoTecnico1.style.transition = ".2s"
    textoTecnico2.style.transition = ".3s"
    textoTecnico3.style.transition = ".2s"
    textoTecnico1.style.transitionDelay = ".2s"
    textoTecnico2.style.transitionDelay = ".4s"
    textoTecnico3.style.transitionDelay = ".2"

    linked1.style.transition = "0s"
    linked2.style.transition = "4s"
    linked3.style.transition = "0s"

    linked1.style.transitionDelay = ".0s"
    linked2.style.transitionDelay = ".4s"
    linked3.style.transitionDelay = ".0s"
}

function lT2(){
    less2.style.display = "none"
    more2.style.display ="inline"
    explicacao2.style.height = "7vh"

    spanLinha2.style.borderBottom = "none"
    textoTecnico2.style.opacity = "0"
    linked2.style.opacity = "0"

    linked1.style.transition = ".0s"
    linked2.style.transition = ".0s"
    linked3.style.transition = ".0s"

    linked1.style.transitionDelay = ".0s"
    linked2.style.transitionDelay = ".0s"
    linked3.style.transitionDelay = ".0s"
}

function mT3(){
    less3.style.display = "inline"
    less2.style.display = "none"
    less1.style.display = "none"
    more3.style.display ="none"
    more2.style.display ="inline"
    more1.style.display ="inline"


    explicacao3.style.height = "53vh"
    explicacao2.style.height = "7vh"
    explicacao1.style.height = "7vh"
    explicacao3.style.transition = ".8s"

    spanLinha3.style.borderBottom = "2px solid #fff"
    spanLinha2.style.borderBottom = "none"
    spanLinha1.style.borderBottom = "none"

    textoTecnico1.style.opacity = "0"
    textoTecnico2.style.opacity = "0"
    textoTecnico3.style.opacity = "1"
    textoTecnico1.style.display = "inline"
    textoTecnico2.style.display = "inline"
    textoTecnico3.style.display = "inline" 

    linked1.style.opacity = "0"
    linked2.style.opacity = "0"
    linked3.style.opacity = "1"

    textoTecnico1.style.transition = ".2s"
    textoTecnico2.style.transition = ".2s"
    textoTecnico3.style.transition = ".3s"
    textoTecnico1.style.transitionDelay = ".2s"
    textoTecnico2.style.transitionDelay = ".2s"
    textoTecnico3.style.transitionDelay = ".4s"

    linked1.style.transition = "0s"
    linked2.style.transition = "0s"
    linked3.style.transition = "4s"

    linked1.style.transitionDelay = ".0s"
    linked2.style.transitionDelay = ".0s"
    linked3.style.transitionDelay = ".4s"
    
    
}

function lT3(){
    less3.style.display = "none"
    more3.style.display ="inline"
    explicacao3.style.height = "7vh"

    spanLinha3.style.borderBottom = "none"

    textoTecnico3.style.opacity = "0"
    linked3.style.opacity = "0"

    linked1.style.transition = ".0s"
    linked2.style.transition = ".0s"
    linked3.style.transition = ".0s"

    linked1.style.transitionDelay = ".0s"
    linked2.style.transitionDelay = ".0s"
    linked3.style.transitionDelay = ".0s"
}




/* ******************************************Cofiguração de login*************************************** */

function toLogin(){
    

    window.document.location = "Assets/paginas-Extras/login.html"
}

function toLogin2(){
    window.document.location = "Assets/paginas-Extras/login2.html"
}


function retroceder(){
    

    window.document.location = "../../index.html"
}

/**************** Troca de contas *********************/

function trocarConta(){
    

    window.document.location = "login.html"
}

function trocarConta2(){
    

    window.document.location = "login2.html"
}



function validateForm() {
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

  
    // Simple validation for demonstration purposes
    if (username == "Elves Chissique" && password == "1234") {
     
      errorMessage.textContent = "Page Accessed succefully";
      return false;
    }
    else if (username == "" || username == "") {
        errorMessage.textContent = "Please enter both username and password. Or contatc Elves Chissique"
        return false
        
    }
    else if(username != "Elves Chissique" || password != "1234"){
        errorMessage.textContent = "The username or password is incorrect. Please Get in touch with Elves Chissique for assistence"
        return false
    }
  
    // In a real-world scenario, you would perform server-side validation here
    // Check if the username and password match a user in the database
  
    return true; // Allow form submission
}
  

/* ----------------------------     configuração de checkBox      ----------------------------------------- */
var checkBoxTorbant = window.document.getElementById('iTurbant')
var checkBoxBelt = window.document.getElementById('iBelt')
var checkBoxShoes = window.document.getElementById('iShoes')
var Mensagem = window.document.getElementById('imensagem')


function checkCheckBox(){

    if(checkBoxTorbant.checked){
        var valorTurbant = window.document.getElementById('TTT').value

        const novaMensagem1 = document.createTextNode(valorTurbant + ' x Turbant, ');
      Mensagem.appendChild(novaMensagem1);

        
    }

    else{
        Mensagem.innerHTML = ""
    }

    if(checkBoxBelt.checked){
        var valorBelt = window.document.getElementById('iBeltN').value

       const novaMensagem2 = document.createTextNode(valorBelt + ' x Belt, ');
      Mensagem.appendChild(novaMensagem2);
        
    }
    else{
        Mensagem.innerHTML = ""
    }

    if(checkBoxShoes.checked){
        var valorShoes = window.document.getElementById('iShoesN').value;
        

        const novaMensagem3 = window.document.createTextNode(valorShoes + ' x Shoes, ');
        Mensagem.appendChild(novaMensagem3)
    }
}


