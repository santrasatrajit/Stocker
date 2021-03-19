

import React,{useEffect,useState} from 'react'
import { List, Loader } from 'semantic-ui-react'


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
    <div style={{paddingTop:10, paddingRight:40}}>
      {state.data?
        <List divided relaxed>
          {state.data.topTenTrendingStocks.map(item => {
            return (<List.Item>
              <List.Content>
                <List.Header>{item[0]}</List.Header>
                <List.Description>{item[1]} {item[2]}</List.Description>
              </List.Content>
            </List.Item>)
          })}
        </List>
      : <Loader active inline='centered' />
      }
  </div>
  )
}

export default Stocks


