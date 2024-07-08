import React from 'react'

const Loading = () => {
  return (
    
    <>
      <div className="w-full flex items-center justify-center h-screen">
        <div className="flex justify-center flex-col items-center mt-10">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
          <div className="text-center">loading...</div>
        </div>
        
      </div>
    </>
  )
}

export default Loading
