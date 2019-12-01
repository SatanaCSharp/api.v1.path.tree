import { Router } from "express";
import {IShow} from "../controllers/interfaces/IController";
import {treesController} from "../controllers/TreesController";
import { AbstractRouter } from "./AbstractRouter";

class TreeRouter extends  AbstractRouter {
    constructor(public router: Router, private controller: IShow) {
        super(router);
        this.router.route("/:id").get(this.controller.show);
    }
}

export  const treeRouter: Router = new  TreeRouter(Router(), treesController).getApiRouter;
