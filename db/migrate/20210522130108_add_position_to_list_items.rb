class AddPositionToListItems < ActiveRecord::Migration[6.1]
  def change
    add_column :list_items, :position, :integer
  end
end
