const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Clean Code Metrics API! Discover metrics and insights designed to enhance your code quality and improve your development process.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});