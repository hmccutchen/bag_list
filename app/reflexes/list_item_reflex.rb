class ListItemReflex < ApplicationReflex


	def create
  	list = List.find(element.dataset.list_id)
		
		list.list_items.create(list_item_params)
	end

	def destroy
		ListItem.find(element.dataset.id).destroy
	end

   private

   def list_item_params
   	params.require(:list_item).permit(:content)
   end

   
   
end