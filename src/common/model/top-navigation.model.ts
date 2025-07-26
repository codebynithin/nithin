import { IdModel } from './id.model';

export interface TopNavigationModel extends IdModel {
  href: string;
  icon: string;
  label: string;
}
