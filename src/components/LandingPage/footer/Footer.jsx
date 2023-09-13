
import logo from '../../../assets/paper.png'
function Footer() {
    return (
        <footer className='bg-gray-200 mt-4 pb-8'>
            <div className='mx-auto p-4  max-w-screen-xl '>
                <a href="#" className="flex items-center">
                    <img src={logo} className="h-8 sm:h-8 md:h-10 lg:h-10 mr-3" alt=" Logo" />
                </a>
                <div className='flex flex-wrap gap-5 float-right'>
                    <p>About  us</p>
                    <p>Cancellation Policy</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                </div>

                <div className='flex justify-between flex-wrap mt-16 md:mt-12'>
                    <div className='w-[370px]'>
                        <p>Copyright 2023 Paperplane communication Pvt. Ltd All rights Reserved</p>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                        <div className='rounded-full  bg-blue-600 text-white h-8 w-8 cursor-pointer'>
                            <p className='text-center font-bold mt-1'>in</p>
                        </div>

                        <div className='rounded-full  bg-blue-600 text-white h-8 w-8 cursor-pointer'>
                            <p className='text-center mt-1 font-bold'>f</p>
                        </div>

                        <div className='rounded-full  bg-blue-600 text-white h-8 w-8 cursor-pointer'>
                            <p className='text-center mt-1 font-bold'>t</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer