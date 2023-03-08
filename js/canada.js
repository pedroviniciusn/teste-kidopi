const Main = {
  init: function () {
    this.cacheSelectors();
    this.getData();
  },

  cacheSelectors: function () {
    this.containerContent = document.querySelector(".container_content");
    this.allDeaths = document.querySelector("#all_deaths");
    this.allCases = document.querySelector("#all_cases");
  },

  dataHtml: function (data) {
    return `
    <div class="state">
      <span><strong>Estado:</strong> ${data.ProvinciaEstado.toLocaleString('pt-BR')} </span>
      <span><strong>Confirmados:</strong> ${data.Confirmados.toLocaleString('pt-BR')}</span>
      <span><strong>Mortes:</strong> ${data.Mortos.toLocaleString('pt-BR')}</span>
    </div>
    `;
  },

  getData: async function () {
    let html = "";
    let totalCases = 0;
    let totalDeaths = 0;

    let data = await fetch(
      "https://dev.kidopilabs.com.br/exercicio/covid.php?pais=canada"
    ).then((response) => {
      return response.json();
    });

    let arr = Object.entries(data);

    arr.map((item) => {
      totalCases += item[1].Confirmados;
      totalDeaths += item[1].Mortos;
      html += this.dataHtml(item[1]);
    });
    
    this.allDeaths.innerHTML += totalDeaths.toLocaleString('pt-BR');
    this.allCases.innerHTML += totalCases.toLocaleString('pt-BR');
    this.containerContent.innerHTML = html;
  },
};

Main.init();
