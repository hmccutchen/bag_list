class ListItemReflex < ApplicationReflex
    
    	before_reflex :set_list_item, only: [:edit, :destroy, :update]

	def create
  	list = List.find(element.dataset.list_id)
		
		list.list_items.create(list_item_params)
	end

	def destroy
		@list_item.destroy
	end

   private

   def list_item_params
   	params.require(:list_item).permit(:name)
   end
   
   def set_list_item
   	 @list_item = ListItem.find(element.dataset.id)
   end
   
   
end