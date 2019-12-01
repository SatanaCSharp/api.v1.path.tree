import {ICreateService, IDeleteService, IShowAllService, IShowService, IUpdateService} from "./IServiceRepository";
export interface IPathsService extends
    IShowAllService,
    ICreateService,
    IUpdateService,
    IShowService,
    IDeleteService {}
