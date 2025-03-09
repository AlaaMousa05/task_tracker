import React from 'react'

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
        <div className="relative w-12 h-12 border-2 border-white rounded-full animate-spin">
          <div className="absolute left-1/2 top-0 w-[3px] h-6 bg-red-500 transform -translate-x-1/2"></div>
        </div>
      </div> 
  )
}

export default loading
