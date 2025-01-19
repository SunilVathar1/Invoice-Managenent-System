// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
// import creaditionals from '../commons/creaditionals';

//  export interface CustomJwtPayload extends jwt.JwtPayload {
//     organizationId: string;
//     role: string;
//   }

// export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {

//   const token = authHeader && authHeader.split(' ')[1];
//   if (!token) {//   const authHeader = req.headers['authorization'];
//     return res.status(401).json({ message: 'Access denied. No token provided.' });
//   }
//   try {
//     const decoded = jwt.verify(token, creaditionals.secreat_key) as CustomJwtPayload;
//     req.body.organizationId = decoded.organizationId;
//     req.body.role = decoded.role;
//     next();
//   } catch (error) {
//     return res.status(403).json({ message: 'Invalid token' });
//   }
// };
