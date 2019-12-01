import {IPathEntity} from "./interfaces/IPathEntity";


export class PathEntity implements IPathEntity {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}
