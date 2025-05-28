import mongoose from 'mongoose';

export interface IProduct {
  name: string;
  description: string;
  price: number;
  stock: number;
}

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true, default: 0 }
});

export default mongoose.model<IProduct & mongoose.Document>('Product', productSchema);
