const Item = require('../models/item');

// Get Items API
const getItems = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '', sort = 'name', order = 'ASC' } = req.query;

    // Pagination logic
    const offset = (page - 1) * limit;

    // Querying data
    const items = await Item.findAndCountAll({
      where: {
        name: { [require('sequelize').Op.like]: `%${search}%` },
      },
      order: [[sort, order.toUpperCase()]],
      limit: parseInt(limit),
      offset: parseInt(offset),
    });

    res.json({
      page: parseInt(page),
      totalPages: Math.ceil(items.count / limit),
      totalItems: items.count,
      data: items.rows,
    });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong!' });
  }
};

module.exports = { getItems };
