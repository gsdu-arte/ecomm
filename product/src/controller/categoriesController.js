import categories from '../model/Category.js';

const categoriesController = {
  listAllProducts: async (_req, res) => {
    const data = await categories.find();
  
    return res.status(200).json(data);
  }
}

export default categoriesController;
