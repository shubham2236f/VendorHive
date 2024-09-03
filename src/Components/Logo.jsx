import React from 'react'
import handshake from "./Media/handshake.png"
function Logo({width="100px"}) {
  return (
    <div>
        <img src={handshake} alt="Logo" />
    </div>
  )
}

export default Logo