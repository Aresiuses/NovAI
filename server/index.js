const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Basic route to test the server
app.get('/api/status', (req, res) => {
  res.json({ message: "NovAI Server is Online" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

