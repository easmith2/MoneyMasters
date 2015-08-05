Rails.application.routes.draw do
  root 'home#index'

  resources :users, only: [:index, :create] do
    resources :budgets, only: [:index, :create]
    resources :categories, only: [:index, :create]
    resources :transactions, only: [:index, :create]
  end

end
