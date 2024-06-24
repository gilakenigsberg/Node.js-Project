import { Request, Response } from 'express';
import Business from '../models/Business';

export const getBusiness = async (req: Request, res: Response) => {
  try {
    const businesses = await Business.find();
    res.status(200).json(businesses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createBusiness = async (req: Request, res: Response) => {
  const { name, address, contact } = req.body;
  try {
    const newBusiness = new Business({ name, address, contact });
    await newBusiness.save();
    res.status(201).json(newBusiness);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateBusiness = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, address, contact } = req.body;
  try {
    const updatedBusiness = await Business.findByIdAndUpdate(id, { name, address, contact }, { new: true });
    if (!updatedBusiness) {
      return res.status(404).json({ message: 'Business not found' });
    }
    res.status(200).json(updatedBusiness);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
