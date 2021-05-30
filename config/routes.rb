Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "list#index"
  resources :list
  
  resources :list do 
    resources :list_items
  end
end
