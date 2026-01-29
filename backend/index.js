const express = require('express');
const app = express();
const PORT = 3000;


// /api/hello endpoint
app.get('/api/hello', (req, res) => {
  res.send('Hello from backend!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
