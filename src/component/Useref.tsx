import { useRef, useState } from "react"
export default function InputFocus() {
  const inputRef = useRef<HTMLInputElement>(null)

  const focusInput = () => {
    // Check if ref exists before using
    if (inputRef.current) {
      inputRef.current.focus()
    }

    // Or use optional chaining
    inputRef.current?.focus()
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

// For Useref for mutable values

export function Timer() {
  const [count, setCount] = useState(0)
  const intervalRef = useRef<number | undefined>(undefined)

  const startTimer = () => {
    if (intervalRef.current) return // Already running

    intervalRef.current = setInterval(() => {
      setCount(prev => prev + 1)
    }, 1000)
  }

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = undefined
    }
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  )
}