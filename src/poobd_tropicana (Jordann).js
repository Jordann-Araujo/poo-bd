const {Pool} = require("pg");

const pool = new Pool({
    connectionString: 'postgres://ulmpcrtmooyajz:e2f6f72c2dbb474399383e351dbf8677497754e3c2a61d0791f7fb3c4615f4dd@ec2-52-203-27-62.compute-1.amazonaws.com:5432/dboghfl5i5mt3j', 
    ssl: {
        rejectUnauthorized: false
    }
});

async function adicionarTuplas(comandoSql) {

        let con = await pool.connect();
        await con.query(comandoSql);
        con.release();
}

async function atualizarTuplas(comandoSql) {
    let con = await pool.connect();
    await con.query(comandoSql)
    con.release();
}

async function deletarTuplas(comandoSql) {
    let con = await pool.connect();
    await con.query(comandoSql)
    con.release();
}

async function mostrarTuplas(tabela) {
    let con = await pool.connect();
    let res = await con.query(`select * from ${tabela}`);
    let tuplas = res.rows;
    for(let tupla of tuplas) {
        console.log(tupla);
    }
    con.release();
}

adicionarTuplas(`
    insert into pessoa (id_pessoa, nome) values (1, 'José');
    insert into pessoa (id_pessoa, nome) values (2, 'João');
    insert into pessoa (id_pessoa, nome) values (3, 'Pedro');
    insert into pessoa (id_pessoa, nome) values (4, 'Crisitina');
    insert into pessoa (id_pessoa, nome) values (5, 'Paula');
`)

atualizarTuplas(`
    update pessoa set nome = 'Joaquim' where nome = 'João';
    update pessoa set nome = 'Maria' where id_pessoa = 5;
    update pessoa set nome = 'Henrique' where nome = 'Pedro';
`)

deletarTuplas(`
    delete from pessoa where nome like 'J%'
`)

mostrarTuplas('pessoa');