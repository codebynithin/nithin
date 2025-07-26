import { IdModel } from './id.model';

export interface QuickLinkModel extends IdModel {
  name: string;
  icon: string;
  href: string;
  target?: string;
}
