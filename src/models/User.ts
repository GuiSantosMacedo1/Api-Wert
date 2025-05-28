import mongoose from 'mongoose';

// Interface do usuário
export interface IUser {
  id: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

// Esquema do usuário
const userSchema = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }
});

// Modelo do usuário
export default mongoose.model<IUser & mongoose.Document>('User', userSchema);
