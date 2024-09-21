import React from 'react'

const User = ({name,company="CSE"}) => {
  return (
    <div>
      <h1>My name is :"{name}</h1>
      <h3>{company}</h3>
    </div>
  )
}

export default User
