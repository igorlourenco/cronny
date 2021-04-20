import { Header } from '../components/header'
import { Protected } from '../components/protected'

const Home = () => {
  return (
    <Protected>
      <Header />
    </Protected>
  )
}

export default Home
