require("dotenv").config();
const express = require("express");
const { configureCors } = require("./config/corsConfig");
const {
  requestLogger,
  addTimeStamp,
} = require("./middleware/customMiddleware");
const {
  asyncHandler,
  globalErrorHandler,
} = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(requestLogger);
app.use(addTimeStamp);

app.use(configureCors());
app.use(express.json());

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
