import { Modal } from "antd";
import { useState } from "react";
import { addItem,updateItem} from "../../../api/ItemApi";

const ItemFormModal = ({modalOpen,setModalOpen,showToast,selectedItem,setSelectedItem,setUpdate}) => {

    const [item,setItem] = useState({
        category: "",
        brand: "",
        color: "",
        image : "",
    })

    const handleImageChange = (e)=>{
        if(selectedItem._id === undefined){
            setItem((prevState) => ({
                ...prevState,
                image: e.target.files[0],
            }));
        }
        else{
            setSelectedItem((prevState)=>({
                ...prevState,
                image: e.target.files[0]
            }))
        }
      
       
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append("image",item.image)
        formData.append("category",item.category)
        formData.append("brand",item.brand)
        formData.append("color",item.color)
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
       
        formData.append("image",selectedItem.image)
        formData.append("category",selectedItem.ItemCategory)
        formData.append("brand",selectedItem.ItemBrand)
        formData.append("color",selectedItem.ItemColor)

        formData.append("imageURL",selectedItem.imageUrl)
        
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
            ItemCategory : "",
            ItemBrand : "",
            ItemColor :"",
            imageUrl : "",
        })
        setItem({
            category: "",
            brand: "",
            color: "",
            image : "",
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
                      
                        <input type="text" placeholder="Item Category"  name={selectedItem._id === undefined ? "category" : "ItemCategory"}   value={selectedItem.ItemCategory? selectedItem.ItemCategory : item.category}    className="w-full p-2 rounded-lg text-lg border-2"  onChange={handleInputChange}/>
                        <input type="text" placeholder="Item Brand"     name={selectedItem._id === undefined ? "brand" : "ItemBrand"}         value={selectedItem.ItemBrand ? selectedItem.ItemBrand : item.brand}             className="w-full p-2 rounded-lg text-lg border-2"  onChange={handleInputChange}/>
                        <input type="text" placeholder="Item Color"     name={selectedItem._id === undefined ? "color" : "ItemColor"}         value={selectedItem.ItemColor ? selectedItem.ItemColor : item.color}             className="w-full p-2 rounded-lg text-lg border-2"  onChange={handleInputChange}/>
                        <h1>Upload Image</h1>
                        <input type="file" accept="image/*" className=""  onChange={handleImageChange}/>
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