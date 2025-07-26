import { IdModel } from './id.model';

export interface EducationModel extends IdModel {
  date: string;
  title: string;
  institution: string;
  description: string;
}
