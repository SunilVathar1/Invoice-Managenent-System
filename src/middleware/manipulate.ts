import {Request,Response,NextFunction} from 'express'
import { loggers } from 'winston'
export async function manipulatePayload(data:string) {
    console.log(data);
}
