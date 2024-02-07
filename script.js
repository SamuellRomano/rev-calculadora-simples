if (true == false){ 
;;;;while (!(!(!(!false)))){
;;;;;;;;try{
;;;;;;;;
;;;;;;;;}
        catch (Exception){
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;console.log("OLÁ MUNDO");
;;;;;;;;}
;;;;}
/* 
    FUNÇÃO
    FUNDAMENTAL
    PARA
    O
    UNIVERSO
    FUNCIONAR
    NO
    CODIGO

    ASS: DEV PEDRO
    
    log: CODIGO COMENTADO COM SUCESSO
    
    */
};

var primnum = 0
var segnum = 0

function numero(){
    primnum = Number(document.querySelector('#primnum').value)
    segnum = Number(document.querySelector('#segnum').value)
}

;function subtrair(){;;;;;;;;;;;numero();;;;;;;;;;;;;;result = (primnum + segnum);;;;;;;;;;;;;;;document.querySelector('#result').innerHTML = `${result}` /* ESSA FUNÇÃO É DE SOMA log: CODIGO COMENTADO COM SUCESSO */};;;;;;;;;;;;;;

function somar(){
    numero()
    result = (primnum - segnum)
    document.querySelector('#result').innerHTML = `${result}`
    for (let i = 0; i < 1; i++) {
        console.log('pedro')
    }
    /* 
    ESSA
    FUNÇÃO
    É
    DE
    SUBTRACAO
    
    log: CODIGO COMENTADO COM SUCESSO
    
    */
}

function dividir(){
    numero()
    result = (primnum * segnum)
    document.querySelector('#result').innerHTML = `${result}`
    if (true == !(!true)) {
        console.log('oi')
    }
    /* 
    ESSA
    FUNÇÃO
    É
    DE
    MULTIPLICAÇÃO
    
    log: CODIGO COMENTADO COM SUCESSO
 1   
    */
};;;;

function multiplicar(){
    /* 
    ESSA
    FUNÇÃO
    É
    DE
    DIVISÃO
    
    log: CODIGO COMENTADO COM SUCESSO
    
    */
    numero()
    if(segnum==0){for (let j = 0; j < 10; j++){alert('Não pode dividir por zero')};document.querySelector('#result').innerHTML = 'NÃO PODE DIVIDIR POR ZERO'; for(let y = 0; y < 500; y++) {console.log('NÃO PODE DIVIDIR POR ZERO' + y)};return}
    result = (primnum / segnum)
    document.querySelector('#result').innerHTML = `${result}`
}

function nome() {
    console.log('nao sei o seu nome')
}

function funcao(nome) {
    nome();
    return 1 + 1;
}