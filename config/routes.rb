Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index, :update, :destroy]
    resources :releases, only: [:create, :index, :show, :destroy]
    resources :songs, only: [:create, :index, :show, :destroy]
    resource :session, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"


end
