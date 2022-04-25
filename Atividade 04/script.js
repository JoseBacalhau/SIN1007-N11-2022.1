let pessoas = [
    { nome: "Vitor", idade: 23 },
    { nome: "Júlia", idade: 21 },
    { nome: "Alberto", idade: 19 },
    { nome: "Linus", idade: 16 },
  ];
  let people = [{ name: "", birth_year: "" }];
  let currentPage = "https://swapi.dev/api/people";
  let nextPage = null;
  const objTraducao = {
    name: "Nome",
    height: "Altura",
  };
  
  const btFetch = document.getElementById("botaoFetch");
  const btProxPag = document.getElementById("botaoProxPag");
  const lista = document.getElementById("lista");
  const listaFetch = document.getElementById("listaFetch");
  
  function exibirLista() {
    lista.innerHTML = "";
    for (let i = 0; i < pessoas.length; ++i) {
      const textNode = document.createTextNode(
        
        //<table>
          `Nome: ${pessoas[i].nome} Idade: ${pessoas[i].idade}`
        //</table>
        
      );
      const liNode = document.createElement("table");
      liNode.appendChild(textNode);
      lista.appendChild(liNode);
    }
  }
  
  function exibirListaStarWars() {
    btProxPag.disabled = nextPage == null;
    listaFetch.innerHTML = "";
    for (let i = 0; i < people.length; ++i) {
      let str = "";
      for (let campo in people[i]) {
        str += `${objTraducao[campo]}: ${people[i][campo]}\n`;
      }
      const textNode = document.createTextNode(
        
        `Nome: ${people[i].name} Ano de Nascimento: ${people[i].birth_year} - ${str}`
      );
      const liNode = document.createElement("tr");
      liNode.appendChild(textNode);
      listaFetch.appendChild(liNode);
    }
  }
  
  const fetchStarWarsPeople = () => {
    fetch(currentPage)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        people = data.results;
        nextPage = data.next;
        exibirListaStarWars();
      })
      .catch((err) => {
        console.log("Erro recebido: ", err);
      });
  };
  
  const fetchProxPag = () => {
    currentPage = nextPage;
    nextPage = null;
    fetchStarWarsPeople();
  };
  
  btFetch.onclick = fetchStarWarsPeople;
  btProxPag.onclick = fetchProxPag;
  
  exibirLista();
  exibirListaStarWars();