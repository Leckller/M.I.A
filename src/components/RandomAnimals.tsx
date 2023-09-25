import { useEffect, useState } from "react"
import { ApiDog, ApiFox } from "../services/Apis";
import { animalsType } from "../services/types";
import Loading from "./Loading";
import { MainAnimals } from "../styles";

function RandomAnimals() {
  const [apis, setApis] = useState<animalsType>()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const effect = async () => {
      setLoading(true);
      const responseDog = await ApiDog();
      const responseFox = await ApiFox();
      const all = [responseDog, responseFox];
      setApis(all);
      setLoading(false);
    }
    effect();
  }, [])
  if (loading) return <Loading/>
  return (
    <MainAnimals>
      <section>
        <h2>Random Dog!</h2>
        {apis && <img src={apis[0]} alt="" />}
      </section>
      <section>
        <h2>Random Fox!</h2>
        {apis && <img src={apis[1]} alt="" />}
      </section>
    </MainAnimals>
  )
}

export default RandomAnimals
