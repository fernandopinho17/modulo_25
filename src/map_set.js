let meuMap = new Map();
meuMap.set("nome", "gian");
meuMap.set("stack", "html", "css", "js");

console.log(meuMap);

const nome = meuMap.get("nome")

console.log(nome);

console.log(meuMap.size)

console.log(meuMap.has("sobrenome"))

//meuMap.clear()

console.log(meuMap.size)

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap)

// [nome => gian]
// [stack => html, css, js]

const cpfs = new Set();

cpfs.add('28775941066')
cpfs.add('79375325059')
cpfs.add('94297541068')

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['gian souza', 'josé Paulo', 'Maria Isabel', 'Luana', 'Gian Souza']

const arrayComoSet = new Set([...array])

const arraySemItensDuplicados = [...arrayComoSet]

console.log(arrayComoSet)
console.log(arraySemItensDuplicados)

console.log(arrayComoSet)