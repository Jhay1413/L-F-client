import { Modal } from "antd";
import { Image } from "cloudinary-react";
import { useEffect, useState } from "react";
import { ConfirmMatchItems } from "../../../api/MatchItemApi";

const ItemPendingModal = ({selectedItem,openViewModal,setOpenViewModal,setUpdate}) => {

    const confirmMatch =  async()=>{
        const response = await ConfirmMatchItems(selectedItem);
        console.log(response)
        setUpdate(prev=>!prev);
        setOpenViewModal(!openViewModal)
    }
    return ( 
        <>
            <Modal title="Pending Items" open={openViewModal} footer={null} onCancel={()=>setOpenViewModal(!openViewModal)}  width={'50%'} bodyStyle={{ height: '100%', overflow: 'auto' }}>
                <div className="w-full h-full grid grid-cols-2 gap-4 text-sm">
                    <div className="w-full items-center justify-center border-2 rounded-lg max-h-full grid grid-rows-3 grid-flow-col">
                        <div className="w-full h-full p-2 items-center justify-center row-span-2">
                            <div className=" h-full w-full">
                                <a href ={selectedItem.ImageUrl} target="_blank" rel="noopener noreferrer">
                                    <Image
                                    cloudName="ItemImage"
                                    publicId = {selectedItem.ImageUrl}
                                    crop="fill"
                                    className="rounded-lg w-full h-full object-cover"
                                   
                                    />
                                </a>
                            </div>
                        </div>
                      
                        <ul className="w-full h-full flex flex-col items-center ">
                            <li className="p-2 border-b-2  w-full justify-between items-center flex"><h1 className="w-full">Category</h1><h1 className="w-full flex justify-start font-bold">{selectedItem.ItemCategory}</h1></li>
                            <li className="p-2 border-b-2  w-full justify-between items-center flex"><h1 className="w-full">Brand</h1><h1 className="w-full flex justify-start font-bold">{selectedItem.ItemBrand}</h1></li>
                            <li className="p-2 border-b-2  w-full justify-between items-center flex"><h1 className="w-full">Color</h1><h1 className="w-full flex justify-start font-bold">{selectedItem.ItemColor}</h1></li>
                            <li className="p-2 border-b-2  w-full justify-between items-center flex"><h1 className="w-full">Types</h1><h1 className="w-full flex justify-start font-bold">{selectedItem.ItemTypes}</h1></li>
                            <li className="p-2 border-b-2  w-full justify-between items-center flex"><h1 className="w-full">From</h1><h1 className="w-full flex justify-start font-bold">Found Items</h1></li>
                        </ul>
                      
                    </div>
                    <div className="w-full items-center justify-center border-2 rounded-lg h-full grid grid-rows-3 grid-flow-col ">
                        <div className="w-full h-full p-2 items-center justify-center row-span-2">
                        <div className="w-full h-full p-2 items-center justify-center row-span-2 ">
                            <div className=" h-full w-full">
                                <a href ={selectedItem.matchWith.ImageUrl} target="_blank" rel="noopener noreferrer">
                                    <Image
                                    cloudName="ItemImage"
                                    publicId = {selectedItem.matchWith.ImageUrl}
                                    crop="fill"
                                    className="rounded-lg w-full h-full object-cover"
                                   
                                    />
                                </a>
                            </div>
                        </div>
                      
                        </div>
                        <ul className="w-full h-full flex flex-col items-center ">
                            <li className="p-2 border-b-2  w-full justify-between items-center flex"><h1 className="w-full">Category</h1><h1 className="w-full flex justify-start font-bold">{selectedItem.matchWith.ItemCategory}</h1></li>
                            <li className="p-2 border-b-2  w-full justify-between items-center flex"><h1 className="w-full">Brand</h1><h1 className="w-full flex justify-start font-bold">{selectedItem.matchWith.ItemBrand}</h1></li>
                            <li className="p-2 border-b-2  w-full justify-between items-center flex"><h1 className="w-full">Color</h1><h1 className="w-full flex justify-start font-bold">{selectedItem.matchWith.ItemColor}</h1></li>
                            <li className="p-2 border-b-2  w-full justify-between items-center flex"><h1 className="w-full">Types</h1><h1 className="w-full flex justify-start font-bold">{selectedItem.matchWith.ItemTypes}</h1></li>
                            <li className="p-2 border-b-2  w-full justify-between items-center flex"><h1 className="w-full">From</h1><h1 className="w-full flex justify-start font-bold">Lost Items</h1></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full flex items-center flex-row justify-center space-x-2 p-4">
                    <button className="bg-emerald-400 text-white p-2 text-xl rounded-lg" onClick={confirmMatch}>Confirm</button>
                    <button className="bg-red-400 text-white p-2 text-xl rounded-lg">Decline</button>
                </div>
            </Modal>
        </>
     );
}
 
export default ItemPendingModal;