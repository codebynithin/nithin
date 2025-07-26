import mongoose, { Schema } from 'mongoose';
import { PortfolioModel } from '../../common/model/portfolio.model';

const PortfolioSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
    required: true,
  },
});

export default mongoose.model<PortfolioModel>('Portfolio', PortfolioSchema);
