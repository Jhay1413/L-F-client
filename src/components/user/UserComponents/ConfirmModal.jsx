import { Button, Modal } from 'antd';
const ConfirmModal = ({isModalOpen,setIsmodalOpen,returnMessage,data}) => {

    const handleCancel = () => {
        setIsmodalOpen(false)
    }
    return ( 
        <>  

            <Modal title="Notification" open={isModalOpen} onCancel={handleCancel} centered footer={null}>
                <div className='flex items-center justify-center p-4 text-lg'>
                    <h1>{returnMessage}</h1>
                </div>
            </Modal>
        </>
     );
}
export default ConfirmModal;