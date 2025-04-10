const express = require('express');
const app = express();
const PORT = 3000;

// 🛠️ Middleware to parse JSON body
app.use(express.json());

let users = [
  { id: 1, name: 'Dhruv', email: 'Dhruv@example.com' },
  { id: 2, name: 'Mayank', email: 'Mayank@example.com' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
