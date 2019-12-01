import { Request, Response } from "express";
import {IPathEntity} from "../entities/interfaces/IPathEntity";
import {PathMapper} from "../mappers/PathMapper";
import { pathRepository } from "../repositories/PathRepository";
import {IPathsService} from "./interfaces/IPathsService";

export class PathsService implements IPathsService {
    public async index(req: Request, res: Response): Promise<void> {
        try {
            res.send(await pathRepository.findAll());
        } catch (e) {
            res.sendStatus(500);
        }
    }

    public async show(req: Request, res: Response): Promise<void> {
        try {
            res.send(await pathRepository.findById(req.params.id));
        } catch (e) {
            res.sendStatus(500);
        }
    }

    public async store(req: Request, res: Response): Promise<void> {
        try {
            const entity: IPathEntity = new PathMapper().mapRequestToEntity(req);
            res.send(await pathRepository.store(entity));
        } catch (e) {
            res.sendStatus(500);
        }
    }

    public async update(req: Request, res: Response): Promise<void> {
        try {
            const entity: IPathEntity = new PathMapper().mapRequestToEntity(req);
            res.send(await pathRepository.update(req.params.id, entity));
        } catch (e) {
            res.sendStatus(500);
        }
    }
    public async delete(req: Request, res: Response): Promise<void> {
        try {
            res.send(await pathRepository.delete(req.params.id));
        } catch (e) {
            res.sendStatus(500);
        }
    }
}
export const pathService = new PathsService();
