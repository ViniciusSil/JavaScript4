const titulo = document.getElementById("titulo");
const listaNaoOrdenada = document.querySelector("ul");
const ancora = document.querySelector("a");
const listaOrdenada = document.getElementById("lista-ordenada");


titulo.innerText = ("Título da página");

ancora.innerText = ("Proz educação");

listaNaoOrdenada.innerHTML = `
        <li>Primeiro </li>
        <li>Segundo </li>
        <li>Terceiro</li>
`;

listaOrdenada.innerHTML = `
        <li>
            <a href="https://google.com.br">Google</a>
        </li>
        <li>
            <a href="https://github.com/">github</a>
        </li>
        <li>
            <a href="https://www.youtube.com/">youtube</a>
        </li>
`;