const dotenv = require("dotenv");
dotenv.config();
const db = require("./config/db");

const app = require("./middleware/app");

app.listen(process.env.PORT, () => {
  console.log(`Server listen on port ${process.env.PORT}`);
});
