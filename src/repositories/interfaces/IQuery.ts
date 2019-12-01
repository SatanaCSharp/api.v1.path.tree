
export interface IQueryFindAll<T>  {
    findAll(): Promise<T[]>;
}

export interface IQueryFindById<T>  {
    findById(id: string): Promise<T| null>;
}

export interface IQueryStore<E, T> {
    store(entity: E): Promise< T | T[] | null>;
}

export interface IQueryUpdate<E, T>  {
    update(id: string, entity: E): Promise<T | T[] | null>;
}

export interface IQueryDelete<T>  {
    delete(id: string): Promise< T[] | null>;
}
