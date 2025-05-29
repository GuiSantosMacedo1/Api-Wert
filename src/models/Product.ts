import mongoose from 'mongoose';

export interface IProduct {
  name: string;
  description: string;
  price: number;
  stock: number;
  rating: number;
  category: string; 
  imageUrl?: string;
}

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: false, default: 0 },
  stock: { type: Number, required: true, default: 0 },
  category: { type: String, required: true },
  imageUrl: { type: String, required: false } 
});

export default mongoose.model<IProduct & mongoose.Document>('Product', productSchema);
