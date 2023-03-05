import { Router } from 'express';
import categoriesController from '../controller/categoriesController.js';

const categoriesRouter = Router();

categoriesRouter
  .get('/categories/:id', categoriesController.listCategoryById)
  .get('/categories', categoriesController.listAllCategories)
  .post('/categories', categoriesController.createCategory);

export default categoriesRouter;
