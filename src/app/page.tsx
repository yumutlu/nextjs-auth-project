import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]/route"
import Link from "next/link"

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <div className="min-h-screen bg-black-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to our Authentication Project</h1>
      {session ? (
        <div className="text-center">
          <p className="mb-4">Welcome, {session.user?.name || session.user?.email}</p>
          <Link href="/api/auth/signout" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Sign Out
          </Link>
        </div>
      ) : (
        <Link href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign In
        </Link>
      )}
    </div>
  )
}