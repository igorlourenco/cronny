import React, { useState, useEffect, useContext, createContext } from 'react'
import firebase from '../config/firebase'
import { createUser } from '../database/client'
import { useRouter } from 'next/router'

const authContext = createContext({
  user: null,
  signInWithGoogle: null,
  signOut: null,
})

export function AuthProvider({ children }) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth() {
  const router = useRouter()
  const [user, setUser] = useState({})

  const handleUser = async (rawUser: firebase.User) => {
    if (rawUser) {
      const tempUser = await formatUser(rawUser)

      const { token, ...userWithoutToken } = tempUser

      setUser(tempUser)
      await createUser(tempUser.uid, userWithoutToken)

      return tempUser
    } else {
      setUser(false)
      return false
    }
  }

  const signInWithGoogle = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(async (response) => {
        await handleUser(response.user)
      })
  }

  const signOut = async () => {
    router.push('/')
    return firebase
      .auth()
      .signOut()
      .then(async () => {
        await handleUser(null)
      })
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser)

    return () => unsubscribe()
  }, [])

  return {
    user,
    signInWithGoogle,
    signOut,
  }
}

const formatUser = async (user: any) => {
  return {
    uid: user?.uid,
    email: user?.email,
    name: user?.displayName,
    token: user.ya,
    photoUrl: user.photoURL,
  }
}
