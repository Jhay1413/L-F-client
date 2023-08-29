import React from 'react'

function AuthLayout({children}) {
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
      <div className="h-full lg:h-4/5 bg-white w-full lg:w-3/5 flex items-center justify-center lg:justify-between">
        <div className="h-full w-full lg:w-1/2">
            {children}
           
        </div>
        <div className="hidden lg:h-full  lg:w-1/2 lg:block auth-image ">
            
        </div>
    </div>
</div>
  )
}

export default AuthLayout