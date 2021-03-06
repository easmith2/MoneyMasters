require 'sidekiq/web'

Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  devise_for :users

  root 'home#index'

  resources :users, only: [:show, :edit, :update] do
    get 'profile', to: 'users#show'
    get 'budgets', to: 'users#show'
    resources :budgets, except: [:new, :edit]
    resources :transactions, except: [:show, :new, :edit]
    resources :categories, except: [:show, :new, :edit]
  end

  authenticate :users, lambda { |u| u.admin? } do
    mount Sidekiq::Web => 'admin/sidekiq'
  end

end
