import { IPathEntity } from "../entities/interfaces/IPathEntity";
import { IPathSchema } from "../schemas/interfaces/IPathSchema";
import { Path } from "../schemas/Path";
import { IPathRepository } from "./interfaces/IPathRepository";

export class PathRepository implements IPathRepository<IPathEntity, IPathSchema> {
    public async findAll(): Promise<IPathSchema[]> {
        return Path.find({}, "_id name");
    }

    public async findById(id: string): Promise<IPathSchema | null> {
        return Path.findById(id, "_id name");
    }

    public async store(entity: IPathEntity): Promise<IPathSchema[] | IPathSchema | null> {
        const path: IPathSchema = new Path(entity);
        await path.save();
        return this.findAll();
    }

    public async update(id: string, entity: IPathEntity): Promise<IPathSchema[] | IPathSchema | null> {
        await Path.updateOne({_id: id}, entity);
        return this.findAll();
    }
    public async delete(id: string): Promise<IPathSchema[]> {
        await Path.deleteOne({_id: id});
        return await this.findAll();
    }
}
export const pathRepository = new PathRepository();
