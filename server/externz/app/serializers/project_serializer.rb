class ProjectSerializer < ActiveModel::Serializer
  attributes :id,  :name, :description, :start_date, :end_date, :project_type, :location, :pay, :eligibility, :additional, :status, :student_id, :business_id
end
