import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {

  return (
    <>
    <Navbar/>
    <div className="card">
      
      <Card title = "Title 1" description="Desc 1" para="rerum eum praesentium voluptates? Impedit non esse ea omnis asperiores voluptate vitae harum inventore. Accusamus?"/>
      <Card title = "Title 1" description="Desc 1" para="rerum eum praesentium voluptates? Impedit non esse ea omnis asperiores voluptate vitae harum inventore. Accusamus?"/>
      <Card title = "Title 1" description="Desc 1" para="rerum eum praesentium voluptates? Impedit non esse ea omnis asperiores voluptate vitae harum inventore. Accusamus?"/>
      <Card title = "Title 1" description="Desc 1" para="rerum eum praesentium voluptates? Impedit non esse ea omnis asperiores voluptate vitae harum inventore. Accusamus?"/>
    </div>
     <Footer/>
    </>
  )
}

export default App
