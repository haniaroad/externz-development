class StudentSerializer < ActiveModel::Serializer
   attributes :id,:first_name, :last_name, :school, :gpa, :location, :user_id
   has_many :skills
   has_many :projects
end
