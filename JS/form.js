class Form{

    constructor(){
        this.id = 1;
        this.arrayPedidos = [];
    }

    salvar(){
       let pedido = this.lerDados();

        if(this.validaCampos(pedido)){
            this.adicionar(pedido);
        }
        console.log(pedido); 
    }

    adicionar(pedido){
        this.arrayPedidos.push(pedido);
        this.id++;
    }

    lerDados(){
        let pedido = {}

        pedido.id = this.id;
        pedido.tituloPedido = document.getElementById('tituloPedido').value;
        pedido.text = document.getElementById('text').value;

        return pedido;
    }

    validaCampos(pedido){
        let msg = '';

        if(pedido.tituloPedido == ''){
            msg += 'Informe o assunto \n';
        }

        if(pedido.text == ''){
            msg += 'Descreva o pedido \n';
        }
        if(msg != ''){
            alert(msg);
            return false;
        }

        return true;
    }

    listaTAbela(){
        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrayPedidos.length; i ++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_assunto = tr.insertCell();
            let td_pedido = tr.insertCell();

            td_id.innerText = this.arrayPedidos[i].id;
            td_assunto.innerText = this.arrayPedidos[i].tituloPedido;
            td_pedido.innerText = this.arrayPedidos[i].text;




        }
    }    
    chamar(){
        this.listaTAbela();

    }    

    
}

var pedido = new Form();
