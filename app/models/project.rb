class Project < ApplicationRecord
  belongs_to :student
  belongs_to :business
  enum role: {open: "open", closed: "closed"}
end
