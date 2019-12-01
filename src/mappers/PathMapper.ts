import {Request} from "express";
import {IPathEntity} from "../entities/interfaces/IPathEntity";
import {PathEntity} from "../entities/PathEntity";
import {IMapRequestToEntity} from "./interfaces/IMapRequestToEntity";

export class PathMapper implements IMapRequestToEntity<IPathEntity> {
    public mapRequestToEntity(req: Request): IPathEntity {
        return new PathEntity(req.body.name);
    }
}
