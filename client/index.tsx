/**
 * Main entrypoint
 */

// External imports
import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider, useQuery } from "react-query"

// Library imports
import motd from "#lib/motd"

// Style imports
import "@fontsource/merriweather/latin.css"
import "@fontsource/merriweather-sans/latin.css"
import "#client/index.css"

/**
 * Main React application
 */
function App() {
  const { data, isLoading } = useQuery<string>("motd", async () => {
    const response = await fetch("/api/motd")
    const json = await response.json()
    return json.motd
  })
  return (
    <div>
      <p>Local: {motd()}</p>
      <p>Network: {isLoading && !data ? "Loading..." : data}</p>
    </div>
  )
}

// Render the React application to DOM
const root = document.getElementById("root")
if (!root) throw new Error("Missing root")
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
