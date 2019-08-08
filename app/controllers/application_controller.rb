class ApplicationController < ActionController::API
    config.middleware.insert_before 0, Rack::Cors do
        allow do
          origins 'http://localhost:3000', 'https://externz.herokuapp.com/' #replace this url with that of your own heroku client app
          resource '*', :headers => :any, :methods => [:get]
        end
      end
end
