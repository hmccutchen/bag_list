class ListController < ApplicationController

	def index

		@lists = List.all
		@list ||= List.new
	
	end
 
 def new
 	@list = List.new
 end
 
 def edit
 end
  private
  
  def set_list_item
		# @list_item ||= ListItem.find(params[:id])
  end
  
  def set_list 
  	@list ||= List.find(params[:id])
  end
end