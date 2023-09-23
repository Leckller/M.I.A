import { useEffect, useState } from "react"
import { WeatherApi } from "../services/Apis"
import { apiWeathertype } from "../services/types"
import { MainContentWeather, SecCurrentWeather } from "../styles"

function Weather() {
  const [returnWeatherApi, setReturnWeatherApi] = useState<apiWeathertype>()
  useEffect(() => {

    // primeiro parametro é o local, e o segundo um endpoint
    
    const weather = async () => {
      const response = await WeatherApi('niteroi', 'current');
      setReturnWeatherApi(response);
      console.log(response)
    }
    weather();
  }, [])
  return (
    <MainContentWeather>
      <SecCurrentWeather>
        <span>
          <p>{`Informações para ${returnWeatherApi?.location.name}`}</p>
          <p>{`${returnWeatherApi?.location.region} - ${returnWeatherApi?.location.country}`}</p>
          <p>{`Última checagem feita às ${returnWeatherApi?.location.localtime.slice(11)}`}</p>
        </span>
        <img src={returnWeatherApi?.current.condition.icon} alt="imagem relacionada ao tempo atual" />
        <span>
          <p>{`Temperatura: ${returnWeatherApi?.current.temp_c}°C`}</p>
          <p>{`Sensação térmica: ${returnWeatherApi?.current.feelslike_c}°C`}</p>
          <p>{`Umidade: ${returnWeatherApi?.current.humidity}%`}</p>
          <p>{`Vento: ${returnWeatherApi?.current.wind_kph}Km/h na direção ${returnWeatherApi?.current.wind_dir}`}</p>
          <p>{`Chuva: ${returnWeatherApi?.current.precip_in}%`}</p>
        </span>
      </SecCurrentWeather>
    </MainContentWeather>
  )
}

export default Weather
