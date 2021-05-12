class ListController < ApplicationController

	def index
		@lists = List.all
		# @list = List.find(params[:id])
	end

end