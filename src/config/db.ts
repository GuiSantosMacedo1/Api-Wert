import mongoose from 'mongoose';

const connectDB = () => {
  const connectWithRetry = () => {
    mongoose.connect(process.env.MONGO_URI || "mongodb://mongo:OYtnUWcLwxPJtcGpxmXOyBSsLVYhnkfk@trolley.proxy.rlwy.net:17619/api-welt")
      .then(() => {
        console.log('MongoDB conectado com sucesso');
      })
      .catch(err => {
        console.error('Erro ao conectar ao MongoDB:', err);
        console.log('Tentando reconectar em 5 segundos...');
        setTimeout(connectWithRetry, 5000);
      });
  };

  connectWithRetry();
};
export default connectDB;
