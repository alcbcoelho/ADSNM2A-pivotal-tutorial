fetch("https://api.thecatapi.com/v1/images/search")
  .then((res) => res.json())
  .then((data) => {
    const img = document.createElement("img");
    img.setAttribute("src", data[0].url);
    document.querySelector("body").insertAdjacentElement("afterbegin", img);
  })
  .catch((err) => console.error(`ERRO: ${err}`));