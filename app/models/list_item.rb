class ListItem < ApplicationRecord
  belongs_to :list
  
  acts_as_list scope: [:list_id], top_of_list: 0
  
  has_rich_text :content
  
  validates :content, presence: true


end
