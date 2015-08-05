Rails.application.routes.draw do
  root 'home#index'

  resources :users, except: [:index] do
    resources :budgets, except: [:new, :edit]
    resources :transactions, except: [:show, :new, :edit]
    resources :categories, except: [:show, :new, :edit]
  end

end
