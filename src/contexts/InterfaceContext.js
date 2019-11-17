import React, { useState, useEffect } from 'react'

const InterfaceContext = React.createContext({})

function InterfaceContextWrap({ children }) {
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(true)
  useEffect(() => {
    checkWindow()
    window.addEventListener('scroll', listener)
    window.addEventListener('resize', checkWindow)
    return () => {
      window.removeEventListener('resize', checkWindow)
      window.removeEventListener('scroll', listener)
    }
  }, [])

  function checkWindow() {
    setIsMobile(window.innerWidth <= 800)
  }

  function listener() {
    if (scrollY > 60) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  return (
    <InterfaceContext.Provider
      value={{ scrolled: scrolled, isMobile: isMobile }}
    >
      {children}
    </InterfaceContext.Provider>
  )
}

export default InterfaceContext
export { InterfaceContextWrap }
