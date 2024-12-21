import mongoose, { Schema } from "mongoose";

export type IComment = {
		user: string;
		comment: string;
		time: Date;
}

const commentSchema = new Schema<Comment>({
    user: {type: String, required: true},
    comment: {type: String, required: true},
    time: {type: Date, required: true},
  });
  

