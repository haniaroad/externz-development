require 'csv'

namespace :import do
  desc "import users from csv"
  task users: :environment do
    filename = File.join Rails.root, "db/csv/users.csv"

    CSV.foreach(filename, headers: true) do |row|

      User.create!(email: row['email'], password: row['password'], role: row['role'])
    end
  end
  desc "import students from csv"
  task students: :environment do
    filename = File.join Rails.root, "db/csv/students.csv"

    CSV.foreach(filename, headers: true) do |row|

      Student.create!(first_name: row['first_name'], last_name: row['last_name'], school: row['school'], location: row['location'], gpa: ['gpa'], user_id: row['user_id'])
    end
  end
  desc "import skills from csv"
  task skills: :environment do
    filename = File.join Rails.root, "db/csv/skills.csv"

    CSV.foreach(filename, headers: true) do |row|

      Skill.create!(name: row['name'])
    end
  end
  desc "import businesses from csv"
  task businesses: :environment do
    filename = File.join Rails.root, "db/csv/businesses.csv"

    CSV.foreach(filename, headers: true) do |row|

     Business.create!(name: row['name'], industry: row['industry'], street_address: row['street_address'], city: row['city'], state: ['state'], web: row['web'], email: row['email'], user_id: row['user_id'].to_i)
    end
  end
  desc "import job_category from csv"
  task job_categories: :environment do
    filename = File.join Rails.root, "db/csv/job_categories.csv"

    CSV.foreach(filename, headers: true) do |row|

      JobCategory.create!(name: row['name'])
    end
  end
  desc "import projects from csv"
  task projects: :environment do
    filename = File.join Rails.root, "db/csv/projects.csv"

    CSV.foreach(filename, headers: true) do |row|

      Project.create!(name: row['name'], description: row['description'], start_date: row['start_date'], end_date: row['end_date'], project_type: ['project_type'], location: row['location'], pay: row['pay'], eligibility: row["eligibility"], additional: row[:additional], status: row[:status], student_id: row['student_id'], business_id: row['business_id'])
    end
  end
  desc "import student_skills from csv"
  task student_skills: :environment do
    filename = File.join Rails.root, "db/csv/student_skills.csv"

    CSV.foreach(filename, headers: true) do |row|
      StudentSkill.create!(student_id: row['student_id'], skill_id: row['skill_id'])
    end
  end
  desc "import project_skills from csv"
  task project_skills: :environment do
    filename = File.join Rails.root, "db/csv/project_skills.csv"

    CSV.foreach(filename, headers: true) do |row|
      ProjectSkill.create!(project_id: row["project_id"].to_i ,skill_id: row["skill_id"].to_i)
    end
  end
    
end