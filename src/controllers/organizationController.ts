import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import Organization from '../models/Organization';
import { generateToken } from '../utils/authUtils';

export const 
registerOrganization = async (req: Request, res: Response) => {
  const orgResitration = req.body;
  const{email,password} = orgResitration;

  try {
    const existingOrganization = await Organization.findOne({ where: { email } });
    if (existingOrganization) {
      return res.json({ message: 'Organization with this email already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    orgResitration.password=hashedPassword
    const newOrganization = await Organization.create( orgResitration);

    const token = generateToken(newOrganization.displayName, newOrganization.email, newOrganization.password);

    return res.json({ organization: newOrganization, token });
  } catch (error) {
    console.error(error);
    return res.json({ message: 'Internal server error' });
  }
};

export const loginOrganization = async (req: Request, res: Response) => {
  const {name,email, password } = req.body;

  try {
    const organization = await Organization.findOne({ where: { email } });
    if (!organization) {
      return res.json({ message: 'Organization not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, organization.password);
    if (!isPasswordValid) {
      return res.json({ message: 'Invalid password' });
    }

    const token = generateToken(name,email,password);

    return res.json({ organization, token });
  } catch (error) {
    console.error(error);
    return res.json({ message: 'Internal server error' });
  }
};

