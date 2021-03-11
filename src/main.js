const db = require('./db');
const Pizza = require('./model/Pizza')

async function sincronizar() {
    await db.sync({force: true});
}

async function consultar() {
    let resultado = await Pizza.findAll();
    for (let i of resultado) {
        console.log(i.dataValues);
    }
}

async function inserir(obj) {
    let res = await Pizza.create(obj)
    console.log(res);
}

//sincronizar();

//inserir({nome: "Pizza de Calabresa", tamanho: "Pequena", sabor1: "Calabresa", sabor2: null})
//inserir({nome: "Pizza de Frango", tamanho: "Grande", sabor1: "Frango", sabor2: null})
//inserir({nome: "Pizza meia Mista, meia Calabresa", tamanho: "Grande", sabor1: "Mista", sabor2: "Calabresa"})
//inserir({nome: "Pizza de Brigadeiro", tamanho: "Pequena", sabor1: "Brigadeiro", sabor2: null})
//inserir({nome: "Pizza de carne de sol", tamanho: "Grande", sabor1: "Carne de sol", sabor2: null})

consultar();
