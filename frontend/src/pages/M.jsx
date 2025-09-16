import React, { useContext } from 'react'
import { UserContext } from './A'

export default function M() {
   const user = useContext(UserContext);
  return (
    <div>
        <h1>M {`This is ${user}`}</h1>
    </div>
  )
}
