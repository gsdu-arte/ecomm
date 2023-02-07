import categoryModel from '../model/Category.js';
import validate from '../validations/categoriesValidations.js'

const categoriesController = {
  listAllCategories: async (_req, res) => {
    const categories = await categoryModel.find();
  
    return res.status(200).json(categories);
  },

  listCategoryById: async (req, res) => {
    const category = await categoryModel.findById(req.params.id);

    return res.status(200).json(category);
  },

  createCategory: async (req, res) => {
    const isValid = validate.validateBody(req.body);
    
    console.log(isValid.error);
    if (isValid.error) {
      return res.status(500).json({ message: isValid.error.message})
    }

    const newCategory = await categoryModel.create(isValid.value);
    
    return res.status(201).json(newCategory);
  }
}

export default categoriesController;
