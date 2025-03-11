//cria uma caixa de diálogo
//window.alert("Olá Mundo!")

//impulsiona coisas no console
//window.console.log("Eu sou o console")

//captura o elemento pelo id
//window.document.getElementById("titulo").innerHTML

//podemos omitir o window (objeto principal)
//screen.width //retorna largura da janela
//screen.height //retorna a altura da janela
//screen.orientation //retorna 3 métodos 
//navigator //traz informações do navegador
//location //retorna a página atual
//history //permite navegar entre o histórico

// function voltar(){
//     history.back()
// }

// function passar(){
//     history.forward()
// }

// console.log(
//     document.getElementById("fruta").innerHTML,
//     document.getElementsByClassName("carro")[1].innerHTML
// )

// console.log(
//     document.getElementsByTagName("p")[0].innerHTML, //retorna collections
//     document.querySelector("div") //pega o primeiro elemento pelo nome/tag, classe/. ou id/#
// )

// console.log(
//     document.getElementById("futebol-europeu").querySelectorAll(".times") //retorna uma node list com todos os documentos com o nome especificado
// )

// console.log(
//     document.getElementById("p1").innerHTML
// )
// var paragrafo = document.getElementById("p1");
// paragrafo.innerHTML = "Novo conteúdo";
// //uso do ; é dispensável
// paragrafo.style.backgroundColor = "green"
// paragrafo.style.color = "#fff"
// paragrafo.style.fontSize = "3rem"
// var imagem = document.getElementById("imagem")
// imagem.src = "../img/img5.jpg"
// imagem.alt = "Tome remada"
// imagem.width = "500"

// var imagem = document.createElement("img")
// imagem.src = "../img/img4.jpg"
// var paragrafo = document.createElement("p")
// paragrafo.innerHTML = "Olá, eu sou um parágrafo!"
// console.log(
//     imagem, paragrafo
// )

// var p = document.createElement("p")
// p.innerHTML = "Olá, eu sou um parágrafo!"
// var img = document.createElement("img")
// img.src = "../img/img2.jpg"
// document.getElementById("conteudo").appendChild(p)
// document.getElementById("conteudo").appendChild(img)
// document.getElementById("conteudo").removeChild(p)

// console.log(
//     // document.documentElement.lastChild, //retorna último elemento node filho
//     // document.documentElement.firstChild //retorna o primeiro elemento node filho
//     document.body.childNodes //retorna todos os nós filhos do body
// )
// var lista = document.body.childNodes
// alert(lista[3].childNodes[3].childNodes[0].nodeValue)

// console.log(
//     document.getElementById("ilheus").parentNode,
//     document.getElementById("ilheus").parentNode.parentNode
// )

// document.getElementById("btn-set").addEventListener("click", function(){
//     document.getElementById("title").setAttribute("class", "red")
// })
// document.getElementById("btn-remove").addEventListener("click", function(){
//     document.getElementById("title").removeAttribute("class")
// })
// document.getElementById("btn-get").addEventListener("click", function(){
//     var valor = document.getElementById("title").getAttribute("class")
//     document.getElementById("class").innerHTML = valor
// })

// var titulo = document.querySelector("h1")
// var texto = document.createTextNode("Um texto qualquer")
// titulo.appendChild(texto)
// titulo.textContent = "Um novo texto"

// var lista = document.getElementsByTagName("ul")[0]
// var itens = lista.children
// var novo = document.createElement("li")
// novo.textContent = "Suco de laranja"
// lista.insertBefore(novo, itens[2]) 
// console.log(lista)

// var lista2 = document.getElementsByTagName("ul")[1]
// var itens2 = lista2.children
// var nova = document.createElement("li")
// nova.textContent = "Bolo de Cenoura"
// lista2.replaceChild(nova, itens2[2])