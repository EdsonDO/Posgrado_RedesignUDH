import { useState, useEffect, useRef } from 'react'
import './FlipCountdown.css'

interface FlipCountdownProps {
  targetDate: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const pad = (n: number): string => String(n).padStart(2, '0')

const calcTimeLeft = (target: string): TimeLeft => {
  const diff = new Date(target).getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const FlipCard = ({
  value,
  label,
}: {
  value: string
  label: string
}) => {
  const prevRef = useRef(value)
  const [flipping, setFlipping] = useState(false)

  useEffect(() => {
    if (prevRef.current !== value) {
      setFlipping(true)
      const t = setTimeout(() => setFlipping(false), 600)
      prevRef.current = value
      return () => clearTimeout(t)
    }
  }, [value])

  return (
    <div className="flip-countdown__unit">
      <div
        className={`flip-countdown__card${flipping ? ' flip-countdown__card--flipping' : ''}`}
      >
        <div className="flip-countdown__top">
          <span>{value}</span>
        </div>
        <div className="flip-countdown__bottom">
          <span>{value}</span>
        </div>
      </div>
      <span className="flip-countdown__label">{label}</span>
    </div>
  )
}

const FlipCountdown = ({ targetDate }: FlipCountdownProps) => {
  const [time, setTime] = useState<TimeLeft>(calcTimeLeft(targetDate))

  useEffect(() => {
    const id = setInterval(() => setTime(calcTimeLeft(targetDate)), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return (
    <div className="flip-countdown" aria-label="Cuenta regresiva para la convocatoria">
      <FlipCard value={pad(time.days)} label="Días" />
      <span className="flip-countdown__separator" aria-hidden="true">:</span>
      <FlipCard value={pad(time.hours)} label="Horas" />
      <span className="flip-countdown__separator" aria-hidden="true">:</span>
      <FlipCard value={pad(time.minutes)} label="Min" />
      <span className="flip-countdown__separator" aria-hidden="true">:</span>
      <FlipCard value={pad(time.seconds)} label="Seg" />
    </div>
  )
}

export default FlipCountdown
