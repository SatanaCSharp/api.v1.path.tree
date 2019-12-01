import { Router } from "express";
import {IPathsController} from "../controllers/interfaces/IPathsController";
import {pathsController} from "../controllers/PathsController";
import {IMiddleware} from "../middleware/interfaces/IMiddleware";
import {PathMiddleware} from "../middleware/PathMiddleware";
import { AbstractRouter } from "./AbstractRouter";

class PathRouter extends  AbstractRouter {
    constructor(public router: Router, private middleware: IMiddleware, private controller: IPathsController) {
        super(router);
        this.router.route("/").get(this.controller.index);
        this.router.route("/:id").get(this.controller.show);
        this.router.route("/").post(middleware.validate, this.controller.store);
        this.router.route("/:id").put(middleware.validate,this.controller.update);
        this.router.route("/:id").delete(this.controller.delete);
    }
}

export  const pathRouter: Router = new  PathRouter(Router(), new PathMiddleware(),  pathsController).getApiRouter;
