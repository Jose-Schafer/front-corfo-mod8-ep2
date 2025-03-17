import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function Layout({ children }) {

  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow w-4/5 mx-auto mt-20">
        {children}
      </div>
      <Footer />
    </div >
  )
}
