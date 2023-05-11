const app = require("./app");
const config = require("./config");
const PORT = config.get("port");
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
