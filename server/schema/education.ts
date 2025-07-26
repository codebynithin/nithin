import mongoose, { Schema } from 'mongoose';
import { EducationModel } from '../../common/model/education.model';

const EducationSchema: Schema = new Schema({
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model<EducationModel>('Education', EducationSchema);
