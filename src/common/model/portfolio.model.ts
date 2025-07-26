import { IdModel } from './id.model';

export interface PortfolioModel extends IdModel {
  title: string;
  category: string;
  imageUrl: string;
  thumbnailUrl: string;
}
