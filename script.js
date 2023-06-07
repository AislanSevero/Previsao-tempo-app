window.onload = function() {
	var divhora = document.getElementById('hora');
	var divdata = document.getElementById('data');
  
	function exibirHora() {
	  var agora = new Date();
  
	  var dia = agora.getDate().toString().padStart(2, '0');
	  var mes = (agora.getMonth() + 1).toString().padStart(2, '0');
	  var ano = agora.getFullYear().toString().padStart(2, '0');
  
	  var hora = agora.getHours().toString().padStart(2, '0');
	  var minutos = agora.getMinutes().toString().padStart(2, '0');
	  var segundos = agora.getSeconds().toString().padStart(2, '0');
  
	  divdata.innerHTML = dia + '/' + mes + '/' + ano;
	  divhora.innerHTML = hora + ':' + minutos + ':' + segundos;
	}
	exibirHora();
	setInterval(exibirHora, 1000);
}
  
let chave = "d4d5b9becae50010bb1cb41f20ce09df"

function colocarNaTela(dados) {
	document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML =  Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
	document.querySelector(".umidade").innerHTML ="Umidade "+ dados.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" +"&units=metric").then(resposta => resposta.json())

    colocarNaTela(dados)
}

function cliqueiNoBotao(){
	let cidade = document.querySelector(".input-cidade").value
 
	buscarCidade(cidade)
 }

 function pressionouEnter(event) {
	if (event.key === "Enter") {
	  cliqueiNoBotao();
	}
  }
  
  document.querySelector(".input-cidade").addEventListener("keydown", pressionouEnter);
  

  