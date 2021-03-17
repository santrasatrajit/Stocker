

import React,{useEffect,useState} from 'react'

function Stocks() {
  const [state,setState]=useState({
    data:null
  })

useEffect(() => {

  fetch('http://localhost:3001/')
  .then(response => response.json())
  .then(json => setState({data:json}))

}, [])


  return (
    <div>
  {state.data?<p>{JSON.stringify(state.data)}</p>:"Loading"}
      
    </div>
  )
}

export default Stocks


