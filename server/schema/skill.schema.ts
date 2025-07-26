import mongoose, { Schema, Document } from 'mongoose';
import { SkillCategoryEnum } from '../../common/enum/skill-category.enum';
import { SkillTypeEnum } from '../../common/enum/skill-type.enum';
import { SkillModel } from '../../common/model/skill.model';

const SkillSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: Object.values(SkillCategoryEnum),
  },
  percentage: {
    type: Number,
    min: 0,
    max: 100,
  },
  subSkills: [String],
  type: {
    type: String,
    enum: Object.values(SkillTypeEnum),
    required: true,
  },
});

export default mongoose.model<SkillModel>('Skill', SkillSchema);
