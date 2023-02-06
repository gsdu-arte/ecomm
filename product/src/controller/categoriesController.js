import categoryModel from '../model/Category.js';
import validate from '../validations/categoriesValidations.js'

const categoriesController = {
  listAllCategories: async (_req, res) => {
    const data = await categoryModel.find();
  
    return res.status(200).json(data);
  },

  createCategory: async (req, res) => {
    const isValid = validate.validateBody(req.body);
    
    if (isValid.error) {
      return res.status(500).json({ message: isValid.error.message})
    }

    const newCategory = await categoryModel.create(req.body);
    console.log(newCategory);
    
    return res.status(201).json(newCategory);
  }
}

export default categoriesController;
