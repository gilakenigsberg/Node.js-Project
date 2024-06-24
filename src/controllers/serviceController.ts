// controllers/serviceController.js
import Service from "../models/Service";
import { Request, Response } from "express";
export const getServices = async (req: Request, res: Response) => {
  try {
    const services = await Service.find();
    res.send(services);
  } catch (error) {
    res.status(400).send(error);
  }
};
export const getService = async (req: Request, res: Response) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).send();
    res.send(service);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const createService = async (req: Request, res: Response) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).send(service);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateService = async (req: Request, res: Response) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!service) return res.status(404).send();
    res.send(service);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteService = async (req: Request, res: Response) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) return res.status(404).send();
    res.send(service);
  } catch (error) {
    res.status(400).send(error);
  }
};
