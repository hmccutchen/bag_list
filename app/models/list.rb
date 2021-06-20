class List < ApplicationRecord
	has_many :list_items, -> { order(position: :asc)}, dependent: :destroy
	belongs_to :user
	
	acts_as_list  top_of_list: 0 
	default_scope -> { order(position: :asc) }
	validates :name, presence: true
end
