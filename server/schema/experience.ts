import mongoose, { Schema } from 'mongoose';
import { ExperienceModel } from '../../common/model/experience.model';

const ExperienceSchema: Schema = new Schema({
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model<ExperienceModel>('Experience', ExperienceSchema);
