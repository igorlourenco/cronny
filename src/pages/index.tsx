import { useAuth } from '../contexts/auth'

function App() {
  const { user, signIn } = useAuth()
  return user ? (
    <a href="/home">home</a>
  ) : (
    <button onClick={signIn}>entrar</button>
  )
}
export default App
