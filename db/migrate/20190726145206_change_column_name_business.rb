class ChangeColumnNameBusiness < ActiveRecord::Migration[5.2]
  def change
    remove_foreign_key :businesses, :job_categories 
    remove_reference :businesses, :job_category, index: true
  end
end
