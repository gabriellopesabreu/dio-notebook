interface Ficha {
    nome: string,
    idade: number,
    profissao: Profissao

};
enum Profissao {
    Atriz,
    Padeiro
};

let pessoa1:Ficha = {
nome: "Maria",
idade: 29,
profissao: Profissao.Atriz
};

let pessoa2:Ficha = {
nome: "Roberto",
idade: 19,
profissao: Profissao.Padeiro
};

let pessoa3:Ficha = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4:Ficha = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};