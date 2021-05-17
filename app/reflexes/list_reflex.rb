class ListReflex < ApplicationReflex

	def create
		 List.create(list_params)
	end


	private
	
	def list_params
		params.require(:list).permit(:name)
	end
	
end