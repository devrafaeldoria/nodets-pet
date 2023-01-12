import { Request, Response } from "express";

export const home = (req: Request, res: Response)=>{
    res.send('pagina home');
};
export const dogs = (req: Request, res: Response)=>{
    res.send('página dogs')
};

export const cats = (req: Request, res: Response)=>{
    res.send('página cats')
}

;export const fishes = (req: Request, res: Response)=>{
    res.send('página fishes')
};