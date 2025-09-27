import { SkillCategoryEnum } from '../enum/skill-category.enum';
import { SkillTypeEnum } from '../enum/skill-type.enum';

export interface SkillModel {
  name: string;
  category: SkillCategoryEnum;
  percentage?: number;
  subSkills?: string[];
  type: SkillTypeEnum;
}
