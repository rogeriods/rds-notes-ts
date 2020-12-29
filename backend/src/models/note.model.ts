import mongoose, { Schema, Document } from 'mongoose';

export interface INote extends Document {
  title: string;
  text: string;
}

const NoteSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
});

export default mongoose.model<INote>('notes', NoteSchema);
