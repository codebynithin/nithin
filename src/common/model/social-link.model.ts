import { IdModel } from './id.model';

export interface SocialLinkModel extends IdModel {
  href: string;
  icon: string;
  label: string;
}
