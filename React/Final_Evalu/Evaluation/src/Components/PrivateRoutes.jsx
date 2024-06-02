import React, { Children } from 'react'

function PrivateRoutes({children}) {
  return (
    <div>
        {children}
    </div>
  )
}

export default PrivateRoutes


// import React, { useContext } from 'react'
// // import { ValContext } from './Authcontext'
// import { Navigate } from 'react-router-dom'

// const PrivateRoutes = ({children}) => {
//     // const {isAuth} = useContext(ValContext)
//     // console.log(isAuth.isAuthenticated = true)
//   return (
//     <div>
//       {isAuthenticated?children:<Navigate to='/login'/>}
//     </div>
//   )
// }

// export default PrivateRoutes