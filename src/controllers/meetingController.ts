// import Service from '../models/Service';
import Service from '../models/Service';
import { Request, Response } from 'express';

export const getMeetings = async (req: Request, res: Response) => {
    try {
        const meetings = await Service.find();
        res.send(meetings);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getMeeting = async (req: Request, res: Response) => {
    try {
        const meeting = await Service.findById(req.params.id);
        if (!meeting) return res.status(404).send();
        res.send(meeting);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const createMeeting = async (req: Request, res: Response) => {
    try {
        const { serviceId, userId, date } = req.body;
        const overlappingMeeting = await Service.findOne({ serviceId, date });
        if (overlappingMeeting) {
            return res.status(400).send({ error: 'Service already exists at this time.' });
        }
        const meeting = new Service(req.body);
        await meeting.save();
        res.status(201).send(meeting);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const updateMeeting = async (req: Request, res: Response) => {
    try {
        const meeting = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!meeting) return res.status(404).send();
        res.send(meeting);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteMeeting = async (req: Request, res: Response) => {
    try {
        const meeting = await Service.findByIdAndDelete(req.params.id);
        if (!meeting) return res.status(404).send();
        res.send(meeting);
    } catch (error) {
        res.status(400).send(error);
    }
};
