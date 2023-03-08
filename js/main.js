const Main = {

  countries: [
    {
      name: "Brasil",
      picture: "./images/brazil.png",
      ref: "brazil",
    },
    {
      name: "Canadá",
      picture: "./images/canada.png",
      ref: "canada",
    },
    {
      name: "Austrália",
      picture: "./images/australia.png",
      ref: "australia",
    },
  ],

  init: function() {
    this.cacheSelectors();
    this.getCountries();
  },

  cacheSelectors: function() {
    this.content = document.querySelector('.container_content');
  },

  countryHtml: function(data) {
    return `
      <a href="${data.ref}.html">
        <div class="country">
          <img src="${data.picture}" alt="${data.ref}" />
          <h2>${data.name}</h2>
        </div>     
      </a>
    `
  },

  getCountries: function() {
    let html = "";

    this.countries.map((item) => {
      html += this.countryHtml(item);
    });

    this.content.innerHTML = html;
  }
}

Main.init();
