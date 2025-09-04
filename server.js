const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Clean Code Metrics API v1.1! Explore metrics and insights to improve your code quality.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});