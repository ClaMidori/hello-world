let botao = document.getElementById("btn")
let email = document.getElementById("email")
let nome = document.getElementById("nome")
let telefone = document.getElementById("tel")
let codigo = document.getElementById("codigo")

botao.addEventListener("click", function(){
    nome = nome.value
    email = email.value
    telefone = telefone.value
    codigo = codigo.value
    if(testEmail(email) == true && testPhone(telefone) == true && testCode(codigo) == true){
    alert("Obrigado por se cadastrar, " + nome + "!")
    }
})

let rePhone = /^\(\d{2}\)\d{5}[-]\d{4}$/
let reCod = /^\d{2}[.]\d{3}[-]\d{3}/
let reMail = /@[g][m][a][i][l][.][c][o][m]/

function testPhone(telefone){
    let ok = rePhone.exec(telefone)
    if(!ok){
        alert(telefone + " I'ts not a valid Telephone Number!")
    }else{
        return true
    }
}

function testCode(codigo){
    let ok = reCod.exec(codigo)
    if(!ok){
        alert(codigo + " I'ts not a valid Zip Code number!")
    }else{
        return true
    }
}

function testEmail(email){
    let ok = reMail.exec(email)
    if(!ok){
        alert(email + " I'ts not a valid Email Adress!")
    }else{
        return true
    }
}