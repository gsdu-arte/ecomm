import { Router } from 'express';
import categoriesController from '../controller/categoriesController.js';

const categoriesRouter = Router();

categoriesRouter.get('/categories', categoriesController.listAllProducts);

export default categoriesRouter;
