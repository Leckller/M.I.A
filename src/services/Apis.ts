export const ApiDog = async () => {
  const response = await fetch('https://random.dog/woof.json');
  const data = await response.json()
  return data.url;
}

// export const ApiDuck =async () => {
//   const response = await fetch('https://random-d.uk/api/random')
//   const data = await response.json()
//   return data.url;
// }

export const ApiFox =async () => {
  const response = await fetch('https://randomfox.ca/floof/')
  const data = await response.json()
  return data.image;
}

export const WeatherApi = async (cityURL: string, endP: string) => {
  try{
    const key = 'b1b78a3d2bf549a682c21507231909'
    const req = fetch(`https://api.weatherapi.com/v1/${endP}.json?lang=pt&key=${key}&q=${cityURL}`)
    const response = (await req).json();
    return response
  } catch(error) {
    alert('error')
  }
}

// term é o nome da pessoa que estamos

export const iTunes = async (artistNameUrl) => {
  const response = await fetch(`https://itunes.apple.com/search?term=luisa+sonza&entity=album`);
  // const response = await fetch(`https://itunes.apple.com/search?entity=album&term=${artistNameUrl}&attribute=allArtistTerm`)
  const data = (await response).json();
  return data;
}