class ListReflex < ApplicationReflex
	
	before_reflex :set_list, only: [:destroy, :edit, :update, :reorder]

	def create
		 List.create(list_params.merge(user: connection.current_user))
	end
 
 def destroy
 	@list.destroy
 end
 
 def reorder(position)
 	@list.insert_at(position)
 end

	private
	
	def list_params
		params.require(:list).permit(:name, :date, :postition)
	end
	
	def set_list
	  @list = List.find(element.dataset.id)
	end
	
end