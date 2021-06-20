class ListController < ApplicationController

	def index

		@lists = List.all
		@list ||= current_user.lists.new
	
	end
 
 def new
 	@list = current_user.lists.new
 end
 
 def edit
 end
  private

  
  def set_list 
  	@list ||= List.find(params[:id])
  end
end