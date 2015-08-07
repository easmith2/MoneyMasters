Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: "users/sessions" }
  root 'home#index'

  resources :users, only: [:show] do
    resources :budgets, except: [:new, :edit]
    resources :transactions, except: [:show, :new, :edit]
    resources :categories, except: [:show, :new, :edit]
  end

end
