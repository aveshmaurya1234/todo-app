import app from "./src/app.js";

app.get("/", (req, res) => {
  res.send("API is running");
});

let port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});