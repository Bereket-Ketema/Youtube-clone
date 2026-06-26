// TypeScript infers from initial value
const [count, setCount] = useState(0)  // count is number

// Explicit type for nullable state
const [user, setUser] = useState<User | null>(null)

// Explicit type for union state
const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

// with complex objects

interface User {
  id: number
  name: string
  email: string
  age?: number
}

function UserProfile() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchUser = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/user")
      const data: User = await response.json()
      setUser(data)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading...</div>
  if (!user) return <div>No user found</div>

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      {user.age && <p>Age: {user.age}</p>}
    </div>
  )
}

// with arrays

const [items, setItems] = useState<string[]>([])
const [numbers, setNumbers] = useState<number[]>([1, 2, 3])
const [users, setUsers] = useState<User[]>([])

// Updating arrays
const addItem = (item: string) => {
  setItems(prev => [...prev, item])
}

const removeItem = (index: number) => {
  setItems(prev => prev.filter((_, i) => i !== index))
}