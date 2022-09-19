import { Navbar } from "./components/Navbar"
import { SubscribeNewsletter } from "./components/SubscribeNewsletter"

function App() {

  return (
    <div className="wrapper w-full max-w-[1920px] h-screen m-auto bg-yellow-shape bg-no-repeat bg-right-top bg-yellow-shape-size">
      <div className="content max-w-[1280px] m-auto px-2">
        <Navbar />
        <SubscribeNewsletter />
      </div>
    </div>
  )
}

export default App
