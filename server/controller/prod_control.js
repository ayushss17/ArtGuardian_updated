import addItem from "../model/addschema.js";

export const getProducts = async (req, res) => {
  try {
    const paintType = req.body || {};
    const type = paintType.type || '';
    
    // Build query - if type is empty, get all products
    const query = type ? { type: type } : {};
    
    // Add pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;
    
    const data = await addItem.find(query)
      .limit(limit)
      .skip(skip)
      .sort({ _id: -1 }); // Sort by newest first
    
    const total = await addItem.countDocuments(query);
    
    if (process.env.NODE_ENV !== 'production') {
      console.log(`Fetched ${data.length} products of type: ${type || 'all'}`);
    }
    
    return res.status(200).json({
      success: true,
      data: data,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return res.status(500).json({
      success: false,
      message: process.env.NODE_ENV === 'production' 
        ? 'Failed to fetch products. Please try again.' 
        : error.message
    });
  }
};
