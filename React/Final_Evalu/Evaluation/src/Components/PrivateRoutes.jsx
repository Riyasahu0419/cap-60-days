import React, { Children } from 'react'

function PrivateRoutes({children}) {
  return (
    <div>
        {children}
    </div>
  )
}

export default PrivateRoutes



