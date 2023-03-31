  const weatherData= async()=>{
    const res =  await fetch("https://api.weatherapi.com/v1/current.json?key=83adb766ef6340dd9e8175134233103&q=48103&aqi=no")
    const json = await res.json()
   
    document.getElementById("date").innerHTML = json.current.last_updated
    document.getElementById("location").innerHTML = json.location.name
    document.getElementById("temperature").innerHTML = json.current.temp_f
    document.getElementById("weahter").innerHTML = json.current.condition.text
  }
  weatherData()
