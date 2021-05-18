class ListController < ApplicationController

	def index
		@lists = List.all
		# @list = List.find(params[:id])
	end
 
 def new
 	@list = List.new
 end
 
end