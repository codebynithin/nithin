import mongoose, { Schema } from 'mongoose';
import { TopNavigationModel } from '../../common/model/top-navigation.model';

const TopNavigationSchema: Schema = new Schema({
  href: { type: String, required: true },
  icon: { type: String, required: true },
  label: { type: String, required: true },
});

export default mongoose.model<TopNavigationModel>('top-navigation', TopNavigationSchema);
