const key = "fa9d9fecb1265b2df558781cb2a77ef0"

function dadosTela(dados){

    document.querySelector(".city").innerHTML="Tempo em"+dados.name
    document.querySelector(".temperatura").innerHTML= Math.floor (dados.main.temp)+"ºC"
    document.querySelector(".previsao").innerHTML=dados.wheather[0].description
    document.querySelector(".umid").innerHTML=dados.main.humidity +"%"
    document.querySelector(".icone").src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    
}


async function buscarCidade(cidade){
    const dados =await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&unit=metric`).then(response=>response.json())
    dadosTela(dados)
     

}


function clicknoBotao(){
    const cidade=document.querySelector(".cidade").value
    console.log(cidade)
}

// https://openweathermap.org/current#name