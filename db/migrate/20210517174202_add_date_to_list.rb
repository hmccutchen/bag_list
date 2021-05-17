class AddDateToList < ActiveRecord::Migration[6.1]
  def change
    add_column :lists, :date, :datetime, null: false
  end
end
