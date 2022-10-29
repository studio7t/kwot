import { app } from "./app"
import { logger } from "@kwot/utils"

app.listen(3001, () => {
  logger.debug("Listening...")
})
