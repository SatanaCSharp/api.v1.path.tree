import {Request, Response} from "express";
import {treeService} from "../services/TreeService";
import {IShow} from "./interfaces/IController";


class TreesController implements IShow {
    public async show(req: Request, res: Response): Promise<void> {
        await treeService.show(req, res);
    }
}
export const treesController = new TreesController();
