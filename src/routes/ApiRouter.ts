import { Router } from "express";
import {config} from "../config";
import {RoutesMiddleware} from "../middleware/RoutesMiddleware";
import {AbstractRouter} from "./AbstractRouter";
import {IApiRouter} from "./interfaces/IApiRouter";
import {pathRouter} from "./PathRouter";
import {treeRouter} from "./TreeRouter";

export class ApiRouter extends AbstractRouter {
    constructor(public router: Router, private routes: IApiRouter[]) {
        super(router);
        this.setupApiRoutes(this.routes);
    }
    private addApiRouter(url: string, router: Router) {
        this.router.use(url, router);
    }

    private setupApiRoutes(routes: IApiRouter[]) {
        routes.forEach((route) => {
            this.addApiRouter(`/${config.api.version}${route.url}`, route.router);
        });
        this.router.use(RoutesMiddleware.unauthorized);
        this.router.all("*", RoutesMiddleware.notFound);
    }
}

const apiRoutes: IApiRouter[] = [
    { url: "/paths", router: pathRouter },
    { url: "/trees/paths/", router: treeRouter },
];

export const apiRouter = new ApiRouter(Router(), apiRoutes);
