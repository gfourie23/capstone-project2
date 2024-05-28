const express = require('express');
const bodyParser = require('body-parser');
const sectionRouter = require('./routes/sectionRouter'); 
const wordRoutes = require('./routes/wordRoutes.js'); 
const authRoutes = require('./routes/authRoutes.js')

const app = express();

//Middleware
app.use(bodyParser.json());

app.use(express.json());

// Mount the router at /api/sections
app.use('/api/sections', sectionRouter);

// Register routes
app.use('/api/vocabulary', vocabularyRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', wordRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  
  // Start the server
  const PORT = process.env.PORT || 3008;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });




export default app;