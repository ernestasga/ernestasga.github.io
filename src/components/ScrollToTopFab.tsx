"use client";

import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState, useCallback, useRef } from 'react'

const ScrollToTopFab: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const rafRef = useRef<number | null>(null)
  const lastScrollTime = useRef(0)

  const checkScrollTop = useCallback(() => {
    // Throttle to max once every 200ms
    const now = performance.now()
    if (now - lastScrollTime.current < 200) {
      return
    }
    lastScrollTime.current = now

    // Cancel previous RAF if exists
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current)
    }

    // Use RAF to batch DOM updates
    rafRef.current = requestAnimationFrame(() => {
      const scrollTop = window.pageYOffset
      setVisible(scrollTop > 100)
      rafRef.current = null
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop, { passive: true })
    return () => {
      window.removeEventListener('scroll', checkScrollTop)
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [checkScrollTop])

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
