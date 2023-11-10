import Link from 'next/link'
export default function NavBar() {
    return (
        <nav>
          {/* Use Link components for nav */}
          {/* Intercepts the request and handles it on client */}
          <Link href={"/"}>Dashboard</Link>
          <Link href={"/tickets"}>Tickets</Link>
        </nav>
    )
}