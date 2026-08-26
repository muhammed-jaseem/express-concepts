const cors = require("cors");

const configureCors = () => {
  return cors({
    //origin -> this will tell which origins you want user to access your api
    origin: (origin, callback) => {
      const allowedOrigins = [
        "http://localhost:3000", // local dev
        "https://yourdomain.com", // public production
      ];

      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by cors"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept-Version"],
    exposedHeaders: ["X-Total-Count", "Total-Range"],
    credentials: true, // enable support for cookies
    preflightContinue: false,
    maxAge: 600, //cache preflight responses for 10 minutes (600 seconds) -> avoid sending options requests multiple times
    optionsSuccessStatus: 204,
  });
};

module.exports = {
  configureCors,
};
