import React, {createContext, useState} from 'react'

export const UserContext = createContext()

export const UserProvider = ({children})=>{
    const [user, setUser] = useState({})
    const [profile, setProfile] = useState({name:"", bio:"", linkedin:"", twitter:"", facebook:"", avatar:{ uri: null }})

   return <UserContext.Provider value={{user, setUser, profile, setProfile}}>
        {children}
    </UserContext.Provider>
}

export const withUserHOC = Component => props => (
    <UserContext.Consumer>
      {state => <Component {...props} context={state} />}
    </UserContext.Consumer>
  )