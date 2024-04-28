import sample from '../../../public/sample1.jpg'
import logo from '../../../public/logo.png'

const LandingHome = () => {
    return ( 
        <>
           <div className="w-full text-lg p-4 lg:text-xl text-white h-screen">
                <div className="flex flex-col items-center justify-center w-full mx-auto h-full lg:flex-row md:justify-between md:w-4/5">
                    <div className="flex flex-col items-center text-center text-black justify-center w-full md:w-2/4 p-4">
                        <h1 className='text-3xl font-bold lg:text-6xl '>Lost and Found System</h1>
                        <p className='text-sm font-semibold lg:text-base'> Eastern Visayas State University-Main Campus.</p>
                      
                    </div>
                    <div className="hidden lg:flex flex-col justify-center w-2/4 p-4">
                        <img src={logo} alt="Logo" className='rounded-lg'/>
                    </div>
                </div>
            </div>
            <div className="w-full text-lg p-4 h-full justify-center lg:text-xl lg:h-screen  bg-slate-100">
                <div className="flex flex-col items-center h-full justify-center space-y-10 w-full mx-auto lg:flex-col md:w-4/5">
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <h1 className='text-3xl font-bold lg:text-4xl'>Simply <span className='text-sky-600'>Foundtastic</span></h1>
                        <p className='text-md'>Say goodbye to Lost and Found overload...</p>
                        <p>...and hello to the world's easiest Lost and Found experience!</p>
                    </div>
                    <div className="flex flex-col items-center justify-center mx-auto ">
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 gap-4">
                            <div className="flex flex-col bg-white p-5 shadow-2xl ">
                                <div className='text-5xl p-5 text'></div>
                                <h1 className='font-bold text-2xl p-5'>Easy to Use</h1>
                                <p className='text-md text-slate-500'>Intuitive Design meets industry know-how and usability. Become an expert in no time thanks to the App's intuitive design.</p>

                            </div>
                            <div className="flex flex-col bg-white p-5 shadow-2xl ">
                                <div className='text-5xl p-5 text'></div>
                                <h1 className='font-bold text-2xl p-5'>We Pay You!</h1>
                                <p className='text-md text-slate-500'>Nothing is more important to us than returning lost property. That is why WE pay YOU for every return using our Handling Gateway!</p>
                                

                            </div>
                            <div className="flex flex-col bg-white p-5 shadow-2xl ">
                                <div className='text-5xl p-5 text'></div>
                                <h1 className='font-bold text-2xl p-5'>Smart Technology</h1>
                                <p className='text-md text-slate-500'>Image Recognition, Smart Matching and Chatbots are just a glimpse of the powerful technology within the Lost and Found App</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
export default LandingHome;