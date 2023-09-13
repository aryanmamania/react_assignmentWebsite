

function Contact() {
  return (
    <div className="mt-12 mx-auto p-4  max-w-screen-lg">
        <div className="flex mx-auto p-14 gap-y-4 justify-between md:flex-row flex-col shadow-lg border rounded-lg ">
            <div className="">
                <h2 className="text-2xl font-bold">Contact Us</h2>
                <p className="text-blue-600 cursor-pointer">mail: support@example.com</p>
                <p className="text-blue-600 cursor-pointer">call: +91 000304030</p>
            </div>

            <div className="">
                <p className="text-md  md:text-lg font-medium text-gray-600 md:w-[450px] "> For any queries enter your Phone Number and we will get back to you</p>
                <div className="rounded-full border mt-3">
                    <input type="text" className="py-2 rounded-full border-0" placeholder="Your phone number"  />
                    <button className="text-white float-right rounded-full px-3 py-2 bg-gradient-to-r  from-blue-600 to-blue-300">Connect</button>
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Contact