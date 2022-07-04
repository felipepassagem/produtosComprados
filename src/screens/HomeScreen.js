import React, {Fragment} from 'react'
import Index from '../components/Index'

function HomeScreen({ data }) {
  return (
    <Fragment>
        <Index data={data}></Index>
    </Fragment>
  )
}

export default HomeScreen