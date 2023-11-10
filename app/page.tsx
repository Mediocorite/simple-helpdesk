import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
        <Sidebar />
        <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to Our Helpdesk</h1>
            <p className="text-gray-600">Your one-stop solution for all support needs</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
        </section>

        <footer className="text-center mt-12">
            <p>&copy; 2023 Helpdesk, Inc. All rights reserved.</p>
        </footer>
    </main>
  )
}
