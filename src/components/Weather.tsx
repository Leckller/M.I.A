import { useEffect, useState } from "react"
import { WeatherApi } from "../services/Apis"
import { apiWeathertype } from "../services/types"
import { MainContentWeather, SecCurrentWeather } from "../styles"
import Loading from "./Loading"

function Weather() {
  const [returnWeatherApi, setReturnWeatherApi] = useState<apiWeathertype>()
  const [loading, setLoading] = useState(false)
  const [locate, setLocate] = useState('niteroi')
  const [input, setInput] = useState('')
  useEffect(() => {

    // primeiro parametro é o local, e o segundo um endpoint
    
    const weather = async () => {
      setLoading(true)
      const response = await WeatherApi(locate, 'current');
      setReturnWeatherApi(response);
      setTimeout(() => {

      }, 2000)
      setLoading(false)
    }
    weather();
  }, [locate])

  if(loading) return <Loading />;

  return (
    <MainContentWeather>
      <h1>Previsão do Tempo</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="inp">
          Insira o nome de um local
          <input 
          type="text"
          placeholder="Ex: Rio de Janeiro"
          value={input}
          id='inp' onChange={(e) => setInput(e.target.value)}  />
        </label>
        <button onClick={ () => setLocate(input) }>Enviar</button>
      </form>
      <SecCurrentWeather>
        <span>
          <p>{`Informações para ${returnWeatherApi?.location.name}`}</p>
          <p>{`${returnWeatherApi?.location.region} - ${returnWeatherApi?.location.country}`}</p>
          <p>{`Última checagem feita às ${returnWeatherApi?.location.localtime.slice(11)}`}</p>
        </span>
        <img src={returnWeatherApi?.current.condition.icon} alt="imagem relacionada ao tempo atual" />
        <span>
          <p>{`${returnWeatherApi?.current.condition.text}`}</p>
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
