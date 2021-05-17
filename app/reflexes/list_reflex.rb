class ListReflex < ApplicationReflex

	def create
		 List.create(list_params)
	end
 
 def destroy
 	List.find(element.dataset.id).destroy
 end

	private
	
	def list_params
		params.require(:list).permit(:name, :date)
	end
	
end