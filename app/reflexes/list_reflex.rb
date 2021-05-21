class ListReflex < ApplicationReflex
	
	before_reflex :set_list, only: [:destroy, :edit, :update]

	def create
		 List.create(list_params)
	end
 
 def destroy
 	@list.destroy
 end

	private
	
	def list_params
		params.require(:list).permit(:name, :date)
	end
	
	def set_list
	  @list = List.find(element.dataset.id)
	end
	
end