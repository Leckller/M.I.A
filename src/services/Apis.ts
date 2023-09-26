import { AlbumType } from "./types";

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

// term é o nome da pessoa que estamos buscando 
// as palavras no fim são transformadas em no formato -> ' ' = +

// o atributo entity se refere a que tipo de informação daquela pessoa estamos buscando
// podendo ser album, movies, podcasts, music vidoes etc... mais info na documentação abaixo:

// https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/SearchExamples.html#//apple_ref/doc/uid/TP40017632-CH6-SW1

export const iTunes = async (term: string = 'luisa sonza', entity: string = 'album'): Promise<AlbumType[]> => {
  const response = await fetch(`https://itunes.apple.com/search?term=${term}&entity=${entity}`);
  const { results }: {results: AlbumType[]} = await response.json();
  return results;
}