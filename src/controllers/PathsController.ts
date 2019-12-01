import { Request, Response } from "express";
import { pathService } from "../services/PathsService";
import {IPathsController} from "./interfaces/IPathsController";

export class PathsController implements IPathsController {
    public async index(req: Request, res: Response): Promise<void> {
       await pathService.index(req, res);
    }
    public async show(req: Request, res: Response): Promise<void> {
        await pathService.show(req, res);
    }

    public async store(req: Request, res: Response): Promise<void> {
        await pathService.store(req, res);
    }

    public async update(req: Request, res: Response): Promise<void> {
        await pathService.update(req, res);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        await pathService.delete(req, res);
    }
}
export const pathsController = new PathsController();
