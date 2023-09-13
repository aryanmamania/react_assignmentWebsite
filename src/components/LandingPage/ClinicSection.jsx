

function ClinicSection() {
    return (
        <>
            <div className=' flex flex-wrap flex-grow gap-3 mt-12 mx-auto p-4 max-w-screen-xl justify-center'>
                <div className='p-6  rounded-lg'>
                    <span className='font-semibold'>Paperplane</span> {" "}<span className='bg-green-600 rounded-lg text-white py-2 px-2'>Clinic</span>
                    <br />
                    Right for 👇
                    <br />
                    <button className='py-3 px-6 mt-3 rounded-full text-white text-bold text-2xl bg-gradient-to-r from-blue-700 to-blue-400'> Start Now </button>
                </div>

                <div className='border rounded-2xl shadow-lg'>
                    <div className='py-12 w-36 rounded-t-2xl bg-[#D0D7FF]'>

                    </div>
                    <div className='text-center font-semibold text-md mb-3'>
                        Small clinic
                    </div>
                </div>

                <div className=' border  rounded-2xl shadow-lg'>
                    <div className='py-12 w-36 rounded-t-2xl bg-[#D0D7FF]'>

                    </div>
                    <div className='text-center font-semibold text-md w-[100px]'>
                        Indipendent Practitioner
                    </div>
                </div>

            </div>
            <div className='border'></div>


            <div className="mt-12 p-4">
                <div className="flex flex-col-reverse md:flex-col-reverse  sm:flex-col-reverse lg:flex-row justify-around items-center">
                    <div>
                        <h3 className="text-4xl  md:w-[500px] font-medium">WhatsApp clinic <span className="text-[#19BCCC]">that s open 24/7 🏪</span></h3>
                        <div className="text-xl text-gray-600 mt-2">
                            <ul className="list-disc list-inside ">
                                <li>Allow patients to book appoinments</li>
                                <li>Send E-Rx along withmedicine & follow-upreminders</li>
                                <li>Collectmedical data</li>
                            </ul>
                        </div>
                        <div className="flex flex-col md:flex-row gap-3 mt-4">
                            <button className="bg-gradient-to-r hover:bg-gradient-to-l  from-[#4D63DD] to-[#22A1F5] rounded-full py-3 px-5 text-white text-2xl font-semibold">Start Now</button>
                        </div>


                    </div>

                    <div>
                        <img src="https://www.paperplanetech.co/static/media/Group%2036868.15a224048ecd837800dc.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClinicSection