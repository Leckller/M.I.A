import { useNavigate } from "react-router-dom"

export const Album = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>voltar</button>
    </div>
  )
}
