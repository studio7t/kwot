/**
 * Express application
 */

// External imports
import express from "express"
import cors from "cors"

// Library imports
import motd from "#lib/motd"

// Initialize an express app
export const app = express()

// Add builtin middlewares
app.use(express.json())
app.use(cors())

// Handle CORS options
app.options("*", (_req, res) => res.status(204).send())

// Message of the day route
app.get("/motd", (_req, res) => {
  res.status(200).send({ motd: motd() })
})
