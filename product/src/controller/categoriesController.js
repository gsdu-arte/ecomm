import categoryModel from '../model/Category.js';
import validate from '../validations/categoriesValidations.js'

const categoriesController = {
  listAllCategories: async (_req, res) => {
    try {
      const categories = await categoryModel.find();

      if (!categories) {
        throw new Error('Categorias não encontradas');
      }
  
      return res.status(200).json(categories);
    } catch (error) {
      if (error.message === 'Categorias não encontradas') {
        return res.status(404).json(error.message);
      }

      return res.status(500).json(error.message);
    }
  },

  listCategoryById: async (req, res) => {
    try {
      const category = await categoryModel.findById(req.params.id);

      if (!category) {
        throw new Error('Categoria não encontrada');
      }

      return res.status(200).json(category);
    } catch (error) {
      if (error.message === 'Categoria não encontrada') {
        return res.status(404).json(error.message);
      }

      return res.status(500).json(error.message);
    }
  },

  createCategory: async (req, res) => {
    try {
      const isValid = validate.validateBody(req.body);
      const newCategory = await categoryModel.create(isValid.value);
      
      return res.status(201).json(newCategory);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

export default categoriesController;
