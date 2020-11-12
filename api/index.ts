import express from "express";
// import cors from "cors";
import cookieParser from "cookie-parser";

// Require API routes
import test from "./routes/test";

const DEFAULT_COOKIE_SECRET = "this-is-default-cookie-secret";

// Create express instance
const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET || DEFAULT_COOKIE_SECRET)); // for signed cookies
app.use(cookieParser()); // for unsigned cookies

// Import API Routes
app.use(test);

export default app;

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`);
  });
}
