import {Document} from "mongoose";
import {IPath} from "./IPath";

export interface IPathSchema  extends IPath, Document {}
