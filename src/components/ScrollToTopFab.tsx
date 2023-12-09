"use client";

import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState, useCallback } from 'react'

const ScrollToTopFab: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const checkScrollTop = useCallback(() => {
    if (!visible && window.pageYOffset > 100) {
      setVisible(true)
    } else if (visible && window.pageYOffset <= 100) {
      setVisible(false)
    }
  }, [visible])

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => { window.removeEventListener('scroll', checkScrollTop) }
  })

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    visible && (
      <div
        role="presentation"
        className="fixed bottom-8 right-8 z-10"
        onClick={scrollToTop}
      >
        <button
          aria-label="Scroll back to top"
          className="p-2 px-4 bg-secondary text-white rounded-full hover:bg-primary focus:outline-none focus:bg-primary transition duration-200"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    )
  )
}

export default ScrollToTopFab
