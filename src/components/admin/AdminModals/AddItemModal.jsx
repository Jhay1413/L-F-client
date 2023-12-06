import { DatePicker, Modal ,Form,Input} from "antd";
import { useState } from "react";
import { addItem,updateItem} from "../../../api/ItemApi";

const ItemFormModal = ({modalOpen,setModalOpen,showToast,selectedItem,setSelectedItem,setUpdate}) => {

    const [item,setItem] = useState({
        ItemCategory: "",
        ItemTypes: "",
        ItemBrand: "",
        ItemColor : "",
        returnedBy:"",
        dateFound:"",
        ItemImage:"",
        
    })
    console.log(selectedItem)
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
        formData.append('returnedBy',item.returnedBy)
        formData.append('dateFound',item.dateFound);
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
        formData.append('returnedBy',item.returnedBy)
        formData.append('dateFound',item.dateFound);
       
        
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
    const handleInputChange = (name,e)=>{
        const {  value, } = e.target;
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
    const handleDateChange = (name, date) => {
        if (selectedItem._id === undefined) {
          setItem((prevState) => ({
            ...prevState,
            [name]: date,
          }));
        } else {
          setSelectedItem((prevState) => ({
            ...prevState,
            [name]: date,
          }));
        }
      };
    
    return ( 
        <>
            <Modal title="Add Item" open={modalOpen} onCancel={modalClose} footer={null}>
            <Form layout="vertical"  initialValues={selectedItem ? selectedItem : ""}>
                <div className="grid grid-cols-4 gap-2">
                    <Form.Item
                        className="col-span-2"
                        label="Item Category"
                        name="ItemCategory"
                        rules={[
                        {
                            required: true,
                            message: 'Please input Item Category!',
                        },
                        ]}
                    >
                        <Input onChange={(e)=>handleInputChange('ItemCategory',e)}/>
                    </Form.Item>
                    <Form.Item
                        className="col-span-2"
                        label="Item Types"
                        name="ItemTypes"
                        rules={[
                        {
                            required: true,
                            message: 'Please input Item Types!',
                        },
                        ]}
                    >
                        <Input onChange={(e)=>handleInputChange('ItemTypes',e)}/>
                    </Form.Item>
                   
                    <Form.Item
                        className="col-span-2"
                        label="Item Brand"
                        name="ItemBrand"
                        rules={[
                        {
                            required: true,
                            message: 'Please input Item Brand!',
                        },
                        ]}
                    >
                        <Input onChange={(e)=>handleInputChange('ItemBrand',e)}/>
                    </Form.Item>
                    <Form.Item
                        className="col-span-2"
                        label="Item Color"
                        name="ItemColor"
                        rules={[
                        {
                            required: true,
                            message: 'Please input Item Color!',
                        },
                        ]}
                    >
                        <Input onChange={(e)=>handleInputChange('ItemColor',e)}/>
                    </Form.Item>
                    <Form.Item
                        className="col-span-2"
                        label="Returned By:"
                        name="returnedBy"
                        rules={[
                        {
                            required: true,
                            message: 'Please input Returned By:!',
                        },
                        ]}
                    >
                        <Input onChange={(e)=>handleInputChange('returnedBy',e)}/>
                    </Form.Item>
                    <Form.Item
                        className="col-span-2"
                        label="Date Found:"
                        name="dateFound"
                        rules={[
                        {
                            required: true,
                            message: 'Please input Date Found!',
                        },
                        ]}
                    >
                       <DatePicker onChange={(date, dateString) => handleDateChange('dateFound', date)} />
                    </Form.Item>
                    <Form.Item
                        className="col-span-2"
                        label="Upload Image:"
                        name="uploadImage"
                        rules={[
                        {
                            required: true,
                            message: 'Please input Upload Image!',
                        },
                        ]}
                    >
                         <input type="file" accept="image/*"  name = "ItemImage"  onChange={handleImageChange}/>
                    </Form.Item>
                </div>
                {
                            selectedItem._id === undefined ? 
                            <button className="bg-blue-500 p-2 rounded-lg text-white text-lg" onClick={handleSubmit}>Submit</button>
                            :
                            <button className="bg-blue-500 p-2 rounded-lg text-white text-lg" onClick={handleUpdate}>Update</button>
                        }
            </Form>
            
            </Modal>
        </>
     );
}
 
export default ItemFormModal;