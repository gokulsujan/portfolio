const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Set your desired port, or use the PORT environment variable if available

app.use(express.static(__dirname)); // Serve static files from the current directory

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
