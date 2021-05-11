class ListItemsController < ApplicationController 


 def index
 end


	def new
		@list_item = ListItem.new
	end

	def create
		@list_item = List.new(list_params)
	end


end