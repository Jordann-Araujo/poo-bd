const {Pool} = require("pg");

const pool = new Pool({
    connectionString: 'postgres://ulmpcrtmooyajz:e2f6f72c2dbb474399383e351dbf8677497754e3c2a61d0791f7fb3c4615f4dd@ec2-52-203-27-62.compute-1.amazonaws.com:5432/dboghfl5i5mt3j', 
    ssl: {
        rejectUnauthorized: false
    }
});

async function adicionarTuplas(atributos) {

    if (atributos.length == 1) {
        let con = await pool.connect();
        await con.query("insert into pizza (id_pizza) values ($1)",[atributos[0]]);
        con.release();
    }

    else if (atributos.length == 2) {
        let con = await pool.connect();
        await con.query("insert into pizza (id_pizza, nome) values ($1, $2)",[atributos[0], atributos[1]]);
        con.release();
    }
    
    if (atributos.length == 3) {
        let con = await pool.connect();
        await con.query("insert into pizza (id_pizza, nome, tamanho) values ($1, $2, $3)",[atributos[0], atributos[1], atributos[2]]);
        con.release();
    }

    if (atributos.length == 4) {
        let con = await pool.connect();
        await con.query("insert into pizza (id_pizza, nome, tamanho) values ($1, $2, $3, $4)",[atributos[0], atributos[1], atributos[2], atributos[3]]);
        con.release();
    }

    if (atributos.length == 5) {
        let con = await pool.connect();
        await con.query("insert into pizza (id_pizza, nome, tamanho) values ($1, $2, $3, $4, $5)",[atributos[0], atributos[1], atributos[2], atributos[3], atributos[4]]);
        con.release();
    }

    if (atributos.length == 6) {
        let con = await pool.connect();
        await con.query("insert into pizza (id_pizza, nome, tamanho) values ($1, $2, $3, $4, $5, $6)",[atributos[0], atributos[1], atributos[2], atributos[3], atributos[4], atributos[5]]);
        con.release();
    }

}

async function atualizarTuplas(argumentosSql) {
    let con = await pool.connect();
    await con.query("update pizza set $1 = $2 where $3", [argumentosSql[0], argumentosSql[1], argumentosSql[2]])
    con.release;
}

async function deletarTuplas(argumentosSql) {
    let con = await pool.connect();
    await con.query()
}
/*
async function 
    let res = await con.query(`
        create table aluno(
            id serial primary key, 
            nome varchar
        )`
    );*/
 
    // await con.query("insert into aluno (nome) values ($1)",["Sicrano"]); // evita  SQL Injection
    // await con.query("insert into aluno (nome) values ($1)",["Beltrano"]);
    // await con.query("insert into aluno (nome) values ($1), ($2), ($3)",["aluno1", "aluno2", "aluno3"]);
    // await con.query("update aluno set nome = $1 where id = $2", ["Aluno 1", 5]);
    // await con.query("delete from aluno where upper(nome) like 'ALUNO%'");
    // await con.query("delete from aluno");
    //await con.query("drop table aluno");
    /*let res = await con.query("select * from aluno");
    let tuplas = res.rows;
    for(let tupla of tuplas) {
        console.log(tupla);
    }
    con.release();
*/