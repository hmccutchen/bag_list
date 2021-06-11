class ListItemsController < ApplicationController 


	def new
		@list_item = ListItem.new
	end

	def create
		@list_item = List.new(list_item_params)
	end
 
 def edit
 	set_list_item
 	
 	 respond_to do |format|
    format.js
  end
 end
 
 
 def update
 end
 
 
 private
 
 def list_item_params
 	params.require(:list_item).require(:content, :position)
 end
 
 def set_list_item
 	@list_item = ListItem.find(params[:id])
 end
end