import {IQueryDelete, IQueryFindAll, IQueryFindById, IQueryStore, IQueryUpdate} from "./IQuery";

export interface IPathRepository<E, T> extends
    IQueryFindAll<T>,
    IQueryFindById<T>,
    IQueryStore<E, T>,
    IQueryUpdate<E, T>,
    IQueryDelete<T> {}
