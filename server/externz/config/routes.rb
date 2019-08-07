Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :job_categories, only:[:index]
      resources :skills, only:[:index]
      resources :projects
      resources :students
      resources :businesses
      resources  :users, only:[:index]
      post '/login', to: 'auth#login'
      get '/auth', to: 'users#authenticate'
    end
  end
end
