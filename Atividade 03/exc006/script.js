const nome = document.getElementById('nome')
const sobrenome = document.getElementById('sobre')

function checar () {  
    alert('Olá, '+ nome.value + " " + sobrenome.value)
    nome.value = ""
    sobrenome.value = ""
} 


