import { useState, useEffect } from 'react'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({})

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    if (typeof window !== 'undefined') {
      setWindowDimensions(getWindowDimensions)
      window.addEventListener('resize', handleResize)
    }
    return () => window?.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
