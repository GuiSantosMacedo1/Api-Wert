import mongoose from 'mongoose';

// Interface do produto
export interface IProduct {
  name: string;
  description: string;
  price: number;
  stock: number;
}

// Esquema do produto
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true, default: 0 }
});

// Modelo do produto
export default mongoose.model<IProduct & mongoose.Document>('Product', productSchema);
