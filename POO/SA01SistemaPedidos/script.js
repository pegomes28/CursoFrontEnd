// Criar a lógica do sistema de pedidos

// Modelar as classes

class Cliente{
    #id;
    #nome;
    #cpf;

    // Construtor
    constructor(id, nome, cpf){
        this.#id = id;
        this.#cpf = cpf;
        this.#nome = nome;
    }
    // Métodos Getters e Setters
    getId(){
        return this.#id;
    }
    getNome(){
        return this.#nome;
    }
    getCpf(){
        return this.#cpf;
    }
}

class Produto{
    // Atributos privados
    #id;
    #nome;
    #preco;

    // construtor
    constructor(id, nome, preco){
        this.#id = id;
        this.#nome = nome;
        this.#preco = preco;
    }
    // Métodos Getters e Setters
    getId(){
        return this.#id;
    }
    getNome(){
        return this.#nome;
    }
    getPreco(){
        return this.#preco;
    }
}

class Pedido{
    // Atributos privados
    #id;
    #cliente;
    #itens;
    #desconto
    #valorTotal;

    // Construtor
    constructor(id, cliente, itens, desconto){
        this.#id = id;
        this.#cliente = cliente;
        this.#itens = itens;
        this.#desconto = desconto;
        this.#valorTotal = this.calcularValorTotal();
    }
    // Métodos Getters e Setters
    getId(){
        return this.#id;
    }
    getCliente(){
        return this.#cliente;
    }
    getItens(){
        return this.#itens;
    }
    getDesconto(){
        return this.#desconto
    }
    getValorTotal(){
        return this.#valorTotal;
    }
    calcularValorTotal(){
        let total = this.#itens.reduce((acc, item) => acc + item.produto.getPreco() * item.quantidade);
        total -= ((this.#desconto/100) * total);
    }
}

// Criar a classe controller // gerenciar os pedidos

class SistemaPedidos{
    // Construtor 
    constructor(){
        this.clientes = [];
        this.produtos = [];
        this.pedidos = [];
    }
    // Métodos do Controller
    cadastrarCliente(){
        const nome = document.getElementById("clienteNome").value;
        const cpf = document.getElementById("cpfCliente").value;
        if(!nome.trim() || !cpf.trim()){ // o "!" significa negação, ou seja, se estiverem vazios, soltará o alerta:
            alert("Preencha todos os campos!");
            return;
        }
        // Instanciar o Objeto
        const cliente = new Cliente(this.clientes.length + 1, nome, cpf);
        // Adicionar o cliente ao array
        this.clientes.push(cliente);
        // Limpar os Campos do Formulário
        document.getElementById("clienteNome").value = "";
        document.getElementById("cpfCliente").value = "";
        // Atualiar a lista de clientes
        this.atualizarClientes();
    }
    atualizarClientes(){
        const lista = document.getElementById("listaClientes");
        lista.innerHTML = ""; // Limpar a lista antes de atualizar
        const select = document.getElementById("selectCliente");
        select.innerHTML = "<option value=''>Selecione um cliente</option>";
        // Percorrer o array de clientes e preencher os campos
        this.clientes.forEach(cliente => {
            const li = document.createElement("li");
            li.textContent = cliente.getNome();
            lista.appendChild(li);
            const option = document.createElement("option");
            option.value = cliente.getId();
            option.textContent = cliente.getNome();
            select.appendChild(option);
        });
    }
}
// Instanciar objeto da classe controller
const sistema = new SistemaPedidos();
// Adicionar o evento de clique no botão
document.getElementById("cadastrarCliente").addEventListener("click", sistema.cadastrarCliente());