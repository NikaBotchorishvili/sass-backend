import { Request, Response } from "express";

export const RegisterCompanyHandler = (req: Request, res: Response) => {
    res.json({"message": "Registration Successful"})
}