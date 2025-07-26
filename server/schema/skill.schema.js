const mongoose = require('mongoose');
const skill_category_enum = require('../../common/enum/skill-category.enum');
const skill_type_enum = require('../../common/enum/skill-type.enum');
const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: Object.values(skill_category_enum.SkillCategoryEnum),
  },
  percentage: {
    type: Number,
    min: 0,
    max: 100,
  },
  subSkills: [String],
  type: {
    type: String,
    enum: Object.values(skill_type_enum.SkillTypeEnum),
    required: true,
  },
});

module.exports = mongoose.model('Skill', SkillSchema);
