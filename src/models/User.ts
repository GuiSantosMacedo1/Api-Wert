import mongoose from 'mongoose';

export interface IUser {
  id: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }
});

export default mongoose.model<IUser & mongoose.Document>('User', userSchema);
