import { useContext } from "react"
import ChatSearch from "./Components/chatSearch/chatsearch"
import Sepration from "./Components/sepration/Sepration"
import SlideBar from "./Components/SlideBar/slidebar"


function App() {
  return (
    <>
      <SlideBar/>
      <Sepration/>
      <ChatSearch/>
    </>
  )
}

export default App
