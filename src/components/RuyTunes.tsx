import { useEffect } from "react"
import { iTunes } from "../services/Apis"

function RuyTunes() {
  useEffect(() => {
    const effect = async () => {
      const response = await iTunes('Luisa+sonza');
      console.log(response);
    }
    effect()
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default RuyTunes
