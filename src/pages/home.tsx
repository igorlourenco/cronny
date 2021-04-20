import { useAuth } from '../contexts/auth'

function App() {
  const { user, signOut } = useAuth()
  return user ? (
    <>
      <p>{user.username}</p>
      <button onClick={signOut}>sair</button>
    </>
  ) : (
    <a href="/">inicio</a>
  )
}
export default App
