class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.string :project_type
      t.string :location
      t.string :eligibility
      t.string :additional
      t.string :status
      t.references :student, foreign_key: true
      t.references :business, foreign_key: true

      t.timestamps
    end
  end
end
