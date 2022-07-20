import React, {Fragment} from 'react'
import Index from '../components/Index'

function HomeScreen({ data, loading }) {
  return (
    <Fragment>
        <Index data={data} loading={loading}></Index>
    </Fragment>
  )
}

export default HomeScreen