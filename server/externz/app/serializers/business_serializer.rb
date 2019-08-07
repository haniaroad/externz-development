class BusinessSerializer < ActiveModel::Serializer
   attributes :id,:name, :industry, :street_address, :city, :state, :web,:email, :user_id
  has_many :projects
end
