import { Bar } from '../components/titleBar/bar'
import { Nav } from "../components/navigation/nav"
import { MainBorad } from '../components/mainBoard/mainBoard'

export default function Home() {
  return (
    <div>
      <Bar></Bar>
      <MainBorad></MainBorad>
      <Nav></Nav>
    </div>
  )
}
