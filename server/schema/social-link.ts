import mongoose, { Schema } from 'mongoose';
import { SocialLinkModel } from '../../common/model/social-link.model';

const SocialLinkSchema: Schema = new Schema({
  href: { type: String, required: true },
  icon: { type: String, required: true },
  label: { type: String, required: true },
});

export default mongoose.model<SocialLinkModel>('social-link', SocialLinkSchema);
