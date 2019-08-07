class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.string :first_name
      t.string :last_name
      t.string :school
      t.decimal :gpa
      t.string :location
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
