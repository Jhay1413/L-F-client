import { Modal } from "antd";
import { useState } from "react";
import { addItem,updateItem} from "../../../api/ItemApi";

const ItemFormModal = ({modalOpen,setModalOpen,showToast,selectedItem,setSelectedItem,setUpdate}) => {

    const [item,setItem] = useState({
        ItemCategory: "",
        ItemTypes: "",
        ItemBrand: "",
        ItemColor : "",
        
    })

    const handleImageChange = (e)=>{
        if(selectedItem._id === undefined){
            setItem((prevState) => ({
                ...prevState,
                ItemImage: e.target.files[0],
            }));
        }
        else{
            setSelectedItem((prevState)=>({
                ...prevState,
                ItemImage: e.target.files[0]
            }))
        }
      
       
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append("ItemCategory",item.ItemCategory)
        formData.append("ItemTypes",item.ItemTypes)
        formData.append("ItemBrand",item.ItemBrand)
        formData.append("ItemColor",item.ItemColor)
        formData.append("image",item.ItemImage)
       try {
            const response = await addItem(formData);
            showToast('success','Data has been Added !');
            setModalOpen(false);
            setUpdate(prev=>!prev);
       } catch (error) {
            console.log(error)
       }
    }
    const handleUpdate = async (e)=>{
        e.preventDefault();

        const formData = new FormData();
       
        formData.append("ItemCategory",selectedItem.ItemCategory)
        formData.append("ItemTypes",selectedItem.ItemTypes)
        formData.append("ItemBrand",selectedItem.ItemBrand)
        formData.append("ItemColor",selectedItem.ItemColor)
        formData.append("image",selectedItem.ItemImage)
        formData.append("imageURL",selectedItem.ItemImageUrl)
        
       try {
            const response = await updateItem(selectedItem._id, formData);
            showToast('success','Data has been Updated !');
            setModalOpen(false);
            setUpdate(prev=>!prev);
       } catch (error) {
        
       }
    }
    const modalClose = () =>{
        setSelectedItem({
            ItemCategory: "",
            ItemTypes: "",
            ItemBrand: "",
            ItemColor : "",
            ItemImageUrl:""
        })
        setItem({
            ItemCategory: "",
            ItemTypes: "",
            ItemBrand: "",
            ItemColor : "",
            ItemImage:""
        })
        setModalOpen(!modalOpen);
       
    }
    const handleInputChange = (e)=>{
        const { name, type, value, } = e.target;
        if(selectedItem._id === undefined){
            setItem((prevState =>({
                ...prevState,
                [name]:value
            })))
        }
        else{
            setSelectedItem((prevState=>({
                ...prevState,
                [name]:value
            })));
        }
      
    }
    return ( 
        <>
            <Modal title="Add Item" open={modalOpen} onCancel={modalClose} footer={null}>
                <form>
                    <div className="flex flex-col space-y-4">
                      
                        <input type="text"  placeholder="Item Category"  name="ItemCategory"        value={selectedItem.ItemCategory ? selectedItem.ItemCategory :item.ItemCategory}    className="w-full p-2 rounded-lg text-lg border-2"  onChange={handleInputChange}/>
                        <input type="text"  placeholder="Item Types"     name="ItemTypes"           value={selectedItem.ItemTypes ? selectedItem.ItemTypes : item.ItemTypes}             className="w-full p-2 rounded-lg text-lg border-2"  onChange={handleInputChange}/>
                        <input type="text"  placeholder="Item Brand"     name="ItemBrand"           value={selectedItem.ItemBrand ? selectedItem.ItemBrand : item.ItemBrand}             className="w-full p-2 rounded-lg text-lg border-2"  onChange={handleInputChange}/>
                        <input type="text"  placeholder="Item Color"     name="ItemColor"          value={selectedItem.ItemColor ? selectedItem.ItemColor : item.ItemColor}             className="w-full p-2 rounded-lg text-lg border-2"  onChange={handleInputChange}/>
                        <h1>Upload Image</h1>
                        <input type="file" accept="image/*"  name = "ItemImage"  onChange={handleImageChange}/>
                        {
                            selectedItem._id === undefined ? 
                            <button className="bg-blue-500 p-2 rounded-lg text-white text-lg" onClick={handleSubmit}>Submit</button>
                            :
                            <button className="bg-blue-500 p-2 rounded-lg text-white text-lg" onClick={handleUpdate}>Update</button>
                        }
                      
                       
                    </div>
                </form>
            </Modal>
        </>
     );
}
 
export default ItemFormModal;