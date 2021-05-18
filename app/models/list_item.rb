class ListItem < ApplicationRecord
  belongs_to :list
  has_rich_text :content
end
