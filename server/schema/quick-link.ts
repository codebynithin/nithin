import mongoose, { Schema } from 'mongoose';
import { QuickLinkModel } from '@/model/quick-link.model';

const QuickLinkSchema: Schema = new Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  href: { type: String, required: true },
  target: { type: String },
});

export default mongoose.model<QuickLinkModel>('quick-link', QuickLinkSchema);
