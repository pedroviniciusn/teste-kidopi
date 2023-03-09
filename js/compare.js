const Main = {
  compare: [],

  init: function () {
    this.cacheSelectors();
    this.getData();
    this.bindEvents();
  },

  cacheSelectors: function () {
    this.containerContent = document.querySelector(".container_content");
    this.country = document.querySelectorAll(".country");
    this.allDeaths = document.querySelector("#all_deaths");
    this.allCases = document.querySelector("#all_cases");
  },

  bindEvents: function () {
    const Self = this;

    this.country.forEach(
      function (element) {
        element.onclick = this.addCompare.bind(Self);
      }.bind(this)
    );
  },

  dataHtml: function (data) {
    this.cacheSelectors();
    this.bindEvents();
    return `
      <div class="country"">
        <h3 id="${data}">${data}</h3>
      </div>
    `;
  },

  getData: async function () {
    let html = "";

    let data = await fetch(
      "https://dev.kidopilabs.com.br/exercicio/covid.php?listar_paises=1"
    ).then((response) => {
      return response.json();
    });

    let arr = Object.entries(data);

    arr.map((item) => {
      html += this.dataHtml(item[1]);
    });

    this.containerContent.innerHTML = html;

    this.cacheSelectors();
    this.bindEvents();
  },

  compareData: async function (data) {
    let countryOneName = "";
    let totalCasesCountryOne = 0;
    let totalDeathsCountryOne = 0;
    let deathRateCountryOne = 0;

    let countryTwoName = "";
    let totalCasesCountryTwo = 0;
    let totalDeathsCountryTwo = 0;
    let deathRateCountryTwo = 0;

    let totalRates = 0;

    let countryOne = await fetch(
      `https://dev.kidopilabs.com.br/exercicio/covid.php?pais=${data[0]}`
    ).then((response) => {
      return response.json();
    });

    let countryTwo = await fetch(
      `https://dev.kidopilabs.com.br/exercicio/covid.php?pais=${data[1]}`
    ).then((response) => {
      return response.json();
    });

    countryOne = Object.entries(countryOne);
    countryTwo = Object.entries(countryTwo);

    countryOne.map((item) => {
      totalCasesCountryOne += item[1].Confirmados;
      totalDeathsCountryOne += item[1].Mortos;
    });

    countryTwo.map((item) => {
      totalCasesCountryTwo += item[1].Confirmados;
      totalDeathsCountryTwo += item[1].Mortos;
    });

    countryOneName = countryOne[0][1].Pais;
    countryTwoName = countryTwo[0][1].Pais;

    deathRateCountryOne =
      parseFloat(totalDeathsCountryOne.toLocaleString("pt-BR")).toFixed() /
      parseFloat(totalCasesCountryOne.toLocaleString("pt-BR")).toFixed();
    deathRateCountryTwo =
      parseFloat(totalDeathsCountryTwo.toLocaleString("pt-BR")).toFixed() /
      parseFloat(totalCasesCountryTwo.toLocaleString("pt-BR")).toFixed();

    totalRates = (
      deathRateCountryOne.toFixed(2) - deathRateCountryTwo.toFixed(2)
    ).toFixed(2);

    alert(
      `${countryOneName}: A taxa de mortalidade é de ${deathRateCountryOne.toFixed(
        2
      )}%\n${countryTwoName}: A taxa de mortalidade é de ${deathRateCountryTwo.toFixed(
        2
      )}%\nA diferença entre a taxa de mortalidade é de ${Math.abs(
        totalRates
      )}%`
    );

    this.compare = [];
  },

  addCompare: async function (event) {
    await new Promise((resolve) => {
      setTimeout(resolve, 300)
    })

    try {
      let id = event.target.children[0].id;
      
      if (this.compare.length < 2) {
        this.compare.push(id);
      }
  
      if (this.compare.length == 2) {
        this.compareData(this.compare);
      }
    } catch (error) {
      alert("Ocorreu um erro, por favor, clique novamente!")
    }
  },
};

Main.init();
