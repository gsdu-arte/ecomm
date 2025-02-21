import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    nome: {type: String, require: true},
    status: {type: String},
  }
);

const categoryModel = mongoose.model('categories', categorySchema);

export default categoryModel;
