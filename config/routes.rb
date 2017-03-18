Rails.application.routes.draw do
  root to: 'vain_glory#basic_vain_response'
  resources :players, only: [:index, :show]
end
