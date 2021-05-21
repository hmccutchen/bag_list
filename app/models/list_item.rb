class ListItem < ApplicationRecord
  belongs_to :list
  has_rich_text :content
  
  validates :content, presence: true
end
