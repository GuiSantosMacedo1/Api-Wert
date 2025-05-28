import { Request, Response } from 'express';
import Product from '../models/Product';

export const createProduct = async (req: Request, res: Response) => {
  const { name, description, price, stock } = req.body;

  try {
    const product = new Product({
      name,
      description,
      price,
      stock
    });

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro no servidor');
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro no servidor');
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Produto não encontrado' });
    }
    res.json(product);
  } catch (err: any) {
    console.error(err);
    if (err.name === 'CastError') {
      return res.status(404).json({ msg: 'Produto não encontrado' });
    }
    res.status(500).send('Erro no servidor');
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { name, description, price, stock } = req.body;

  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Produto não encontrado' });
    }

    product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, price, stock },
      { new: true }
    );

    res.json(product);
  } catch (err: any) {
    console.error(err);
    if (err.name === 'CastError') {
      return res.status(404).json({ msg: 'Produto não encontrado' });
    }
    res.status(500).send('Erro no servidor');
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Produto não encontrado' });
    }

    await Product.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Produto removido' });
  } catch (err: any) {
    console.error(err);
    if (err.name === 'CastError') {
      return res.status(404).json({ msg: 'Produto não encontrado' });
    }
    res.status(500).send('Erro no servidor');
  }
};
