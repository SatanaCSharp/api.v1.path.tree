import directoryTree from "directory-tree";
import {Request, Response} from "express";
import {pathRepository} from "../repositories/PathRepository";
import {IPathSchema} from "../schemas/interfaces/IPathSchema";
import {IShowService} from "./interfaces/IServiceRepository";
class TreeService implements IShowService {
    public async show(req: Request, res: Response): Promise<void> {
        try {
            res.send(await  this.buildTree(req));
        } catch (e) {
            res.sendStatus(500);
        }
    }
    private async buildTree(req: Request) {
        const path = await this.getPath(req);
        if (!path) { return { message: "Incorrect id has been specified!"}; }
        return  directoryTree(path.name);
    }
    private async getPath(req: Request): Promise<IPathSchema| null> {
        return pathRepository.findById(req.params.id);
    }
}
export const treeService = new TreeService();
