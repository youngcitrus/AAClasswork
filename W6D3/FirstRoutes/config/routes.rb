Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  # get '/users', to: 'users#index', as: 'all_users'
  # get '/users/new', to: 'users#new', as: 'new_user'
  # post '/users/', to: 'users#create', as: 'create_user'
  # get '/users/:id', to: 'users#show', as: 'user'
  # get '/users/:id/edit', to: 'users#edit', as: 'edit_user'
  # patch '/users/:id', to: 'users#update', as: 'update_user'
  # delete '/users/:id', to: 'users#destroy', as: 'destroy_user'

  resources :users, except:[:new, :edit] do
    resources :artworks, only: [:index]
    resources :comments, only: [:index]
  end
  resources :artworks, except:[:new, :edit, :index] do
    resources :comments, only: [:index]
  end
  resources :artwork_shares, only:[:create, :destroy]


end
