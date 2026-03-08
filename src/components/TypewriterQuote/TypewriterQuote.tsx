import { useState, useEffect, useRef } from 'react'
import './TypewriterQuote.css'

interface TypewriterQuoteProps {
  text: string
  speed?: number
  startDelay?: number
}

const TypewriterQuote = ({ text, speed = 35, startDelay = 500 }: TypewriterQuoteProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    const timeout = setTimeout(() => {
      setIsTyping(true)
      let i = 0
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1))
          i++
        } else {
          setIsTyping(false)
          clearInterval(interval)
        }
      }, speed)

      return () => clearInterval(interval)
    }, startDelay)

    return () => clearTimeout(timeout)
  }, [hasStarted, text, speed, startDelay])

  return (
    <div className="typewriter-quote" ref={containerRef}>
      <span className="typewriter-quote__open" aria-hidden="true">"</span>
      <p className="typewriter-quote__text">
        {displayedText}
        <span className={`typewriter-quote__cursor ${isTyping ? 'typewriter-quote__cursor--active' : ''}`}>|</span>
      </p>
      <span className="typewriter-quote__close" aria-hidden="true">"</span>
    </div>
  )
}

export default TypewriterQuote
