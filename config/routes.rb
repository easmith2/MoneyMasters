Rails.application.routes.draw do
  devise_for :users

  root 'home#index'

  resources :users, only: [:show] do
    get 'profile', to: 'users#show'
    get 'budgets', to: 'users#show'
    resources :budgets, except: [:new, :edit]
    resources :transactions, except: [:show, :new, :edit]
    resources :categories, except: [:show, :new, :edit]
  end

end
