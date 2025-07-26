import { SkillCategoryEnum } from '../enum/skill-category.enum';
import { SkillTypeEnum } from '../enum/skill-type.enum';
import { IdModel } from './id.model';

export interface SkillModel extends IdModel {
  name: string;
  category: SkillCategoryEnum;
  percentage?: number;
  subSkills?: string[];
  type: SkillTypeEnum;
}
