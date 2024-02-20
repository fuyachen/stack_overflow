import { UserButton } from "@clerk/nextjs"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex-between border p-4">
      <Link href="/">Home</Link>
      <UserButton />
    </nav>
  )
}

export default Navbar
