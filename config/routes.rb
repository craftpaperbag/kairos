Rails.application.routes.draw do
  resources :sketches, only: %i(create show)
  root to: 'top#index'
end
