class User < ApplicationRecord
  has_secure_password
   enum role: {student: "student", business: "business"}
end
