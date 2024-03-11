Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get '/search', to: 'books#search'
      get '/base', to: 'books#base'
    end
  end
end
