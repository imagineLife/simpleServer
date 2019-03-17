const express = require("express");
const app = express();

app.use(express.static("public"));

console.log('process.env.PORT')
console.log(process.env.PORT)

app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${process.env.PORT}`);
});
