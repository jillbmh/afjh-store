import { useLocation } from 'react-router-dom'

export default function CategoriesList() {

  const { state } = useLocation()

  return <h1>{state.category}</h1>
}