const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./models/index');
const itemRoutes = require('./routes/itemRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', itemRoutes);

// Sync Database
sequelize.sync({ force: true }).then(() => {
  console.log('Database synchronized');
  // Seed Data (optional)
  const Item = require('./models/item');
  Item.bulkCreate([
    { name: 'Item A', size: 'Large', type: 'Electronics' },
    { name: 'Item B', size: 'Small', type: 'Furniture' },
    { name: 'Item C', size: 'Medium', type: 'Clothing' },
  ]);
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
