let city=document.getElementById("city")
let country=document.getElementById("country")
let temperature=document.getElementById("temperature")
let userinput=document.getElementById("userinput")

let check = async()=>{
    let cityValue = userinput.value
    if (cityValue == "") {
        alert('enter city name')
    }else{
        let response=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`);
        let data=await response.json();
        //console.log(data); to get json file
        city.textContent=data.name
        country.textContent=data.sys.country
        temperature.textContent=data.main.temp
    }
}
