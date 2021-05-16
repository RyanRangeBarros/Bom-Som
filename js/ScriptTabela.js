/*function criaElemento(elemento){
    return document.createElement(elemento)
}

let titulo = document.querySelector("section h1");
titulo.textContent = "Tabela de Cliente";
let tabela = document.getElementById("tabela");

let thead = criaElemento("thead");
let tbody = criaElemento("tbody");
let tfoot = criaElemento("tfoot");

let indicesTabela = ["id", "name", "address", "phone", "style_music", "email"];
let linhaHead = criaElemento("tr");

function criacelula(tag,text){
tag = criaElemento(tag);
tag.textContent = text;
return tag;
}

for(let j = 0; j< indicesTabela.length; j++){
  let th = criarcelula("th", indicesTabela[j]);
  linhaHead.appendChild(th);
}
thead.appendChild(linhaHead);

for(let j = 0, linhaBody=''; j< linhasTabela.length; j++){

     linhaBody = criaElemento("tr");
     linhaBody.appendChild(criacelula("td", (j+1)));

    for(let i =0, cel=''; i<linhasTabela[j].length; j++){
        cel=criacelula("td", linhasTabela[j][i]);
        linhaBody.appendChild(cel)

    }
    tbody.appendChild(linhaBody);


    
}

tabela.appendChild(thead);
tabela.appendChild(tbody);
tabela.appendChild(tfoot); 

*/

