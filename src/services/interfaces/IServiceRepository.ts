import { Request, Response } from "express";

export interface IShowAllService {
    index(req: Request, res: Response): void;
}
export interface ICreateService {
    store(req: Request, res: Response): Promise<void>;
}
export interface IUpdateService {
    update(req: Request, res: Response): Promise<void>;
}
export interface IShowService {
    show(req: Request, res: Response): Promise<void>;
}
export interface IDeleteService {
    delete(req: Request, res: Response): Promise<void>;
}
