// 1. Import Express
const express = require('express');

// 2. Create an Express app
const app = express();

// 3. Define a GET route for '/'
app.get('/', (req, res) => {
  res.send('Server is running');
});

// 4. Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
