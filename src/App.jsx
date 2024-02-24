import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>What is a Browser ?</h1>
      <p>
      A browser, short for web browser, is a software application used to access information on the World Wide Web. It allows users to view web pages, access websites, and interact with various online resources such as images, videos, text, and other multimedia content. 

Web browsers interpret the HTML (Hypertext Markup Language) code used to create web pages and render them into a visually appealing format that users can understand and interact with. They also support other web technologies such as CSS (Cascading Style Sheets) for styling web pages, JavaScript for adding interactivity, and various web standards and protocols for communication with web servers.

Popular web browsers include Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, and Opera, among others. Each browser may have its own set of features, user interface, and performance characteristics, but they all serve the fundamental purpose of enabling users to navigate the web.
      </p>
      <div className="card">
        <button>
          <Link to="/browsers">View Some Browsers</Link>
        </button>
      </div>
    </>
  )
}

export default App
