import {ICreate, IDelete, IShow, IShowAll, IUpdate} from "./IController";

export interface IPathsController extends
    IShowAll,
    ICreate,
    IUpdate,
    IShow,
    IDelete {}
