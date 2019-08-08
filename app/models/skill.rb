class Skill < ApplicationRecord
    has_many :project_skills
    has_many :projects, through: :project_skills
    has_many :student_skills
    has_many :students, through: :student_skills
end
