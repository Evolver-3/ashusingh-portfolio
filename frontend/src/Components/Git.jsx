import React, { useEffect } from 'react'

const Git = () => {

  useEffect(() => {
  fetch("/id")
    .then(res => res.json())
    .then(data => console.log(data))
}, [])

  return (
  <>
  </>
  )
}

export default Git