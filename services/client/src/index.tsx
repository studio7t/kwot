import React, { useState } from "react"
import ReactDOM from "react-dom/client"

import "@fontsource/merriweather/latin.css"
import "./index.css"

function App() {
  const [qod, setQod] = useState<boolean>(true)
  const [overlay, setOverlay] = useState<boolean>(false)
  const [heading, setHeading] = useState<string>("Kwot")

  return (
    <div className="bg-kwot-background w-screen h-screen relative flex justify-center items-center z-0">
      {/* Content view */}
      {qod ? (
        <div className="bg-pink-500 h-full w-full"></div>
      ) : (
        <div className="bg-red-500 w-52 h-52"></div>
      )}
      {/* Heading text */}
      <h1 className="absolute top-2 left-2 font-serif text-kwot-text text-lg font-bold z-50">
        {heading}
      </h1>
      {/* Navigation buttons */}
      <div className="flex space-x-4 px-2 py-2 absolute bottom-2 right-2 z-30">
        <button
          className={`w-16 h-16 rounded-full border-kwot-text bg-kwot-background border hover:cursor-pointer ${
            qod ? "shadow" : "shadow-inner border-kwot-primary"
          }`}
          onClick={() => setQod(!qod)}
        ></button>
        <button
          className="w-16 h-16 rounded-full border-kwot-text border shadow hover:cursor-pointer"
          onClick={() => setOverlay(true)}
        ></button>
      </div>
      {/* Submission overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-kwot-overlay z-40 bg-opacity-80 backdrop-blur-sm"
          onClick={() => setOverlay(false)}
        ></div>
      )}
    </div>
  )
}

const root = document.getElementById("root")
if (!root) throw new Error("Missing root")
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
