import { model, Model, Schema } from "mongoose";
import { IPathSchema } from "./interfaces/IPathSchema";

const PathSchema: Schema = new Schema({
   name: {
       type: String,
       required: true,
   },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

export const Path: Model<IPathSchema> = model<IPathSchema>("Path", PathSchema);
