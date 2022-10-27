/**
 * Server entrypoint
 */

// Application imports
import { app } from "#server/app"

// Async bootstrap function
async function run() {
  app.listen(3001)
}

// Run the server and catch errors
run().catch(console.error)
