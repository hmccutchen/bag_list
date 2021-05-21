class ListController < ApplicationController

	def index
		@lists = List.all
		@list ||= List.new
	end
 
 def new
 	@list = List.new
 end
 
end