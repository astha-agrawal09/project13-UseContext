//1. Import Area
import { createContext, useState } from 'react'
import B from './B'

//2. Create Context
export const UserContext = createContext()

//3. Component A
export default function A() {
  //3.1 State
  const [drill, setDrill] = useState('createContext')

  //3.2 Return
  return (
    <UserContext.Provider value={drill}>
      <h1>createContext</h1>
      <h2>A</h2>
      <B />
    </UserContext.Provider>
  )
}
