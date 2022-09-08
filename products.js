const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];
const main = document.querySelector('.container')

let tipoItens = []
verificarTipos(products)
criarSecao(tipoItens)

//Função para selecionar itens presentes no array de produtos
function verificarTipos(arrObj) {
  for(let i in arrObj) {
    tipoAtual = arrObj[i].category
    if(!tipoItens.some(item => item == tipoAtual)) tipoItens.push(tipoAtual)
  }
}

//Criar seção de itens
function criarSecao(arrNomeSecao) {
  for(let i in arrNomeSecao) {
    let secaoAtual = arrNomeSecao[i]    
    
    const secao = document.createElement('section')
    secao.classList = 'products-section'
    
    const tituloSecao = document.createElement('h1')
    tituloSecao.innerText = secaoAtual

    const divSecao = document.createElement('div')
    divSecao.classList = `products-content ${secaoAtual.toLowerCase()}`

    const ulSecao = document.createElement('ul')   
    ulSecao.id = secaoAtual.toLowerCase()    
    divSecao.appendChild(ulSecao)

    secao.append(tituloSecao, divSecao)
    
    main.append(secao)
    criarCards(ulSecao.id)
  }

}

//Cria cards de cada item
function criarCards(secaoAtual) {  
  const ulAtual = document.getElementById(secaoAtual)
  
  for(let i in products) {
    let produtoAtual = products[i]
    if(produtoAtual.category.toLocaleLowerCase() == ulAtual.id) {

      const li = document.createElement('li')
      li.classList = "product"
  
      const img = document.createElement('img')
      if(produtoAtual.image === undefined) img.src = "./img/products/no-img.svg"
      else img.src = produtoAtual.image
      img.className = "product-img"
  
      const div = document.createElement('div')
      div.classList = "product-main"
  
      const h1 = document.createElement('h1')
      h1.classList = "product-title"
      h1.innerText = produtoAtual.title
      div.appendChild(h1)
  
      const h5 = document.createElement('h5')
      h5.classList = "product-category"
      h5.innerText = produtoAtual.category
      div.appendChild(h5)
  
      const strong = document.createElement('strong')
      strong.classList = "product-price"
      strong.innerText = `R$ ${converterPontoEmVirgula(produtoAtual.price)}`
      div.appendChild(strong)  
      li.append(img, div)
      ulAtual.appendChild(li)
    }

  }  
  
}

//Converte os pontos dos números em virgulas
function converterPontoEmVirgula(preco) {
  let converterPreco = String(preco)
  converterPreco = converterPreco.replace('.', ',')
  let testValor = converterPreco.slice(-2)
  if(testValor[0] == ',') converterPreco += '0'
  return converterPreco
}