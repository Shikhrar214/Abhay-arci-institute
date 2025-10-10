import React from 'react'
import {Login, Logout, PersonalDetails} from "../student/student.index.js"



export default function LoginLogoutPage() {
  return (
    <div>
      LoginLogoutPage
      <Login/>
      <Logout/>
      <PersonalDetails/>
    </div>
  )
}

