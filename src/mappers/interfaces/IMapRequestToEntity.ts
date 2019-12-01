import {Request} from "express";

export interface IMapRequestToEntity <T> {
    mapRequestToEntity(req: Request): T;
}
