function login() {
    const cpf = document.getElementById('cpf')
    const user = document.querySelector('#cpf').value;
    const password = document.querySelector('#senha').value;

    if (user === "111.111.111-11" || user === "222.222.222-22"){
        window.location.href = 'formrequest.html'
    } else if (user === "999.999.999-99"  && password === '123456')
    {window.location.href = 'login.html'}
    else{errorValidation()};
   
}

function errorValidation(){
    document.getElementById('cpf').id = "cpferro"
    document.getElementById('erro').id = "errohid"
    document.getElementById('cpf').value='';

}


const input = document.querySelector('#cpf')

input.addEventListener('keypress', () => {
    let inputlength = input.value.length

    if (inputlength === 3 || inputlength === 7){
        input.value += '.'
    }else if (inputlength === 11){
        input.value += '-'
    }
})
