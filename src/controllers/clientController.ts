import { Request, Response } from 'express';
import Client from '../models/Client';

export const createClient = async (req: Request, res: Response) => {
  const clientDetails=req.body

  try {
    const newClient = await Client.create( clientDetails);

    return res.json(newClient);
  } catch (error) {
    console.error(error);
    return res.json({ message: 'Internal server error' });
  }
};

export const getClients = async (req: Request, res: Response) => {
  const  clientId  = req.params;

  try {
    const clients = await Client.findOne(clientId);
    return res.json(clients);
  } catch (error) {
    console.error(error);
    return res.json({ message: 'Internal server error' });
  }
};
