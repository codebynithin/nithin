import { IdModel } from './id.model';

export interface ExperienceModel extends IdModel {
  date: string;
  title: string;
  company: string;
  description: string;
}
