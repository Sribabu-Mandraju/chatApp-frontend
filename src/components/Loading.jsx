import React from 'react'

const Loading = () => {
  return (
    <div class="loader-container h-screen w-full flex flex-col items-center justify-center ">
      <div class="loader rotating-plane"></div>
      <div className="text-center pt-3">Please weight...</div>
    </div>
  )
}

export default Loading
