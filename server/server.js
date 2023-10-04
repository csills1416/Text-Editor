const express = require('express');
const path = require('path');  // Require the path module

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

// Add a catch-all route that sends back the main index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
