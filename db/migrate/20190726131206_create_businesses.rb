class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name
      t.string :street_address
      t.string :city
      t.string :state
      t.string :web
      t.string :email
      t.string :industry
      t.references :user, foreign_key: true
      t.references :job_category, foreign_key: true

      t.timestamps
    end
  end
end
