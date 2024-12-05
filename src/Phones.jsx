

import React from 'react'
import { useLoaderData } from 'react-router'

const Phones = () => {
    const data=useLoaderData();
    console.log(data);
  return (
    <div>

        

    <h3>phone here</h3>

    </div>
  )
}

export default Phones