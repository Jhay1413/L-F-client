import { useContext, useState } from "react";
import ConfirmModal from "../UserComponents/ConfirmModal";
import {MagnifyingGlass}  from 'react-loader-spinner'
import { AddNewMatchItem } from "../../../api/MatchItemApi";
import { UserContext } from "../UserContext/UserContext";
//static variables
const items = [
    {name:"Gadgets",ItemTypes:['Mobile Phone','Tablet','Laptop']},
    {name:"Bags",ItemTypes:['Backpack','Belt Bag','Shoulder Bag','Sling Bag']},
    {name:"Wallet",ItemTypes:['Coin purse','Long Wallet','Medium Wallet']},
]

const LostItemPage = () => {
    //state initialization
    const[isModalOpen,setIsmodalOpen] = useState(false);
    const [lostItemInfo, setLostItemInfo] = useState({});
    const [selectedHistory,setSelecetedHistory] = useState({});
    const [isLoading,setIsLoading] = useState(false); 
    const [returnMessage,setReturnMessage] = useState("")
    const selectedItemObject = items.find((item) => item.name === lostItemInfo.ItemCategory);
    const userInfo = localStorage.getItem('userInfo');
    const userInfoObj = JSON.parse(userInfo);

    const {setUpdate} = useContext(UserContext)
    //functions 
    const handleInputChange =(e)=>{
        const {name,value} = e.target
       setLostItemInfo((prevState)=>(
        {
            ...prevState,
            [name]: value
        }
       ))
    }
    const handleImageChange = (e) =>{
       setLostItemInfo((prevState => ({
            ...prevState,
            ItemImage: e.target.files[0]
       }) 
         
       ))
    }
    const submitItem = async (e) =>{
        e.preventDefault()

        const formData = new FormData();
        formData.append("ItemCategory",lostItemInfo.ItemCategory)
        formData.append("ItemTypes",lostItemInfo.ItemTypes)
        formData.append("ItemBrand",lostItemInfo.ItemBrand)
        formData.append("ItemColor",lostItemInfo.ItemColor)
        formData.append("image",lostItemInfo.ItemImage)
        formData.append("userId",userInfoObj._id)

        try {
            setIsLoading(true)
            const response = await AddNewMatchItem(formData);
            if(response.status === 201){
                setReturnMessage("We found your item, please wait for a text message after the admin confirm the request.")
                setUpdate(prev=>!prev)
            }
            else{
                setReturnMessage("Item not found , Retry again after 24 hours");
            }
            setIsmodalOpen(true);
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoading(false);
        }
    }
 
    return ( 
        <>
            {isLoading 
                ? 
                    (<div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50 text-md lg:text-2xl ">
                            <MagnifyingGlass
                                visible={true}
                              
                                ariaLabel="MagnifyingGlass-loading"
                                wrapperStyle={{}}
                                wrapperClass="MagnifyingGlass-wrapper"
                                glassColor = '#c0efff'
                                color = '#e15b64'
                            />
                            <p className="text-white">Searching Database. . . </p>
                    </div>)
                :   null
                
            }
            
         
            <div className="w-full lg:w-8/12 mx-auto pt-10 flex flex-col p-4">
                <div className="flex flex-col space-y-4 lg:w-full lg:w-3/6 justify-start">
                    <h1 className="text-lg lg:text-3xl">Submit Lost Property</h1>
                    <ul className="flex flex-col space-y-4 list-disc text-sm lg:text-md">
                        <li>Our Matching System Finds Lost Property</li>
                        <li>Receive Notifications of Matching Found Items</li>
                    </ul>
                    <p className="text-sm lg:text-md">Please be descriptive when submitting your lost property report, the more information you give us the better chance you have of retrieving your items.</p>
                </div>
                <div className="grid grid-cols-2 gap-x-10 gap-y-4 w-full pt-10 text-xs lg:text-md ">
                    <div className="flex flex-col w-full space-y-2">
                        <label>What was Lost</label>
                        <select name="ItemCategory" className="w-full lg:w-4/5 p-2 border-2 border-gray-400" onChange={handleInputChange}>
                            <option>Select Category</option>
                           {items.map((item,index)=>(
                             <option key = {index}value={item.name}>{item.name}</option>
                           )
                          )}
                        </select>
                    </div>
                   
                     <div className="flex flex-col w-full space-y-2">
                            <label>Types of {lostItemInfo.ItemCategory}</label>
                                <select name="ItemTypes" className="w-full lg:w-4/5 p-2 border-2 border-gray-400" onChange={handleInputChange}>
                                        <option>Select Category</option>
                                        {selectedItemObject?.ItemTypes.map((item,index)=>(
                                            <option key = {item} value={item}>{item}</option>
                                        ))}
                                </select>
                            </div>   
                    <div className="flex flex-col w-full space-y-2">
                        <label>Brand</label>
                        <input type="text" name="ItemBrand" className="w-full lg:w-4/5 p-2 border-2 border-gray-400" placeholder="Brand" onChange={handleInputChange}/>
                    </div>
                    <div className="flex flex-col w-full space-y-2">
                        <label>Primary Color</label>
                        <input type="text" name="ItemColor" className="w-full lg:w-4/5 p-2 border-2 border-gray-400" placeholder="Primary Color" onChange={handleInputChange}/>
                    </div>
                    <div className="flex flex-col w-full space-y-2 justify-center">
                        <label>Upload Image</label>
                        <input type="file"  name = "ItemImage" accept="image/*" className="w-4/5 p-" onChange={handleImageChange}/>
                    </div>
                   
                </div>
                <div className="w-4/5 pt-5 flex  items-center">
                        <button className="p-2 bg-sky-700  rounded-md text-white text-sm lg:text-md" onClick={submitItem}>Submit</button>
                </div>
                <ConfirmModal isModalOpen={isModalOpen} setIsmodalOpen={setIsmodalOpen} returnMessage ={returnMessage}/>
            </div>
        </>
     );
}
 
export default LostItemPage;