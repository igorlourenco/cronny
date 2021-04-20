import React from 'react'
import { Auth } from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types'
import config from '../aws-exports'

export const AuthContext = React.createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    Auth.configure(config)

    Auth.currentAuthenticatedUser()
      .then((user) => setUser(user))
      .catch(() => setUser(null))
  }, [])

  const signIn = () =>
    Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })
      .then((cognitoUser) => {
        setUser(cognitoUser)
        return cognitoUser
      })
      .catch((err) => {
        if (err.code === 'UserNotFoundException') {
          err.message = 'Invalid username or password'
        }
        throw err
      })

  const signOut = () =>
    Auth.signOut().then((data) => {
      setUser(null)
      return data
    })

  const values = React.useMemo(() => ({ user, signIn, signOut }), [user])

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = React.useContext(AuthContext)

  if (context === undefined) {
    throw new Error(
      '`useUser` hook must be used within a `UserProvider` component',
    )
  }
  return context
}
