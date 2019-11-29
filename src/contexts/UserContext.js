import React, {createContext, useState} from 'react'
import { DEFAULT_AVATAR } from '../commons/Utils'

export const UserContext = createContext()

export const UserProvider = ({children})=>{
    const [user, setUser] = useState({})
    const [profile, setProfile] = useState({name:"", bio:"", linkedin:"", twitter:"", facebook:"", avatar:{ uri: DEFAULT_AVATAR }})

   return <UserContext.Provider value={{user, setUser, profile, setProfile}}>
        {children}
    </UserContext.Provider>
}

export const withUserHOC = Component => props => (
    <UserContext.Consumer>
      {state => <Component {...props} context={state} />}
    </UserContext.Consumer>
  )