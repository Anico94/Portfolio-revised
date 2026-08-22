import { Outlet } from 'react-router-dom'
import Backdrop from './components/Backdrop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollManager from './components/ScrollManager'

/**
 * App shell.
 *
 * Backdrop, navbar and footer live outside the router outlet so the background
 * stays put and the chrome never remounts between routes.
 */
export default function App() {
  return (
    <>
      <ScrollManager />
      <Backdrop />

      <a
        href="#main"
        className="bg-emerald text-shadow sr-only rounded-lg px-4 py-2 font-semibold focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]"
      >
        Skip to content
      </a>

      {/* Sticky-footer column: short pages (404) push the footer down without
          forcing a scrollbar the way a min-height on <main> would. */}
      <div className="flex min-h-svh flex-col">
        <Navbar />

        <main id="main" className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  )
}
