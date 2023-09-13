import React, { useRef, useEffect, useState } from "react";
import Brand from "../../assets/paper.png";
import Phone from "../../assets/Group.png";
import { bookingFormApi } from "../../api/user/bookingApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function BookingUI() {
  const navigate = useNavigate()
  const [businessType, setBusinessType] = useState([
    "PolyClinic",
    "Hospital",
    "Individual Clinic",
    "Diagnostic Centre",
    "Pharmacy Chain",
    "IVF Centre",
    "Nursing Home",
  ]);
  const [doctorCount, setDoctorCount] = useState([
    "0-10",
    "10-25",
    "25-50",
    "50-100",
    "100+",
  ]);
  const [inbound, SetInbound] = useState(["10-25", "25-50", "50-100", "100+"]);
  const [formData, setFormData] = useState({
    businessType: "",
    doctorCount: "",
    inbound: "",
    name:"",
    phone:"",
  });
 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const businesstype = businessType.map((items, i) => (
    <option className="text-black" key={i} value={items} id={items}>
      {items}
    </option>
  ));
  const DoctorCount = doctorCount.map((items, i) => (
    <option className="text-black" key={i} value={items} id={items}>
      {items}
    </option>
  ));
  const Inbound = inbound.map((items, i) => (
    <option className="text-black" key={i} value={items} id={items}>
      {items}
    </option>
  ));
  const handleSumbit = (e)=>{
    e.preventDefault();
    bookingFormApi(formData).then((res)=>{
      if(res.data.success===true){
        toast.success('Booking Success')
        navigate('/payment')
      }
    })  
  }
  return (
    <>
      <div className="bg-white h-screen w-full">
        <div className="flex justify-center items-center py-5">
          <img className="w-[150px] " src={Brand} alt="logo_png" />
        </div>

        <div className="flex justify-center items-center ml-4 md:ml-0 ">
          <div className="bg-indigo-200 md:h-[530px] md:w-5/6 h-[1550px] w-[380px] flex md:flex-row flex-col  rounded-xl shadow-black/20 shadow-xl">
            <div className=" md:w-[500px]">
              <div className=" py-12 ">
                <h1 className="text-xl md:ml-[157px] ml-[110px] font-Montserrat font-semibold text-black/60">
                  Book a demo for
                </h1>
                <h1 className="text-2xl md:ml-[110px] ml-[60px] w-[300px] font-bold mr-10 font-Montserrat ">
                  Paperplane Enterprise
                </h1>
              </div>

              <img
                className="md:w-[300px] w-[350px] md:ml-[105px] ml-9 -mt-8 "
                src={Phone}
                alt="img-png"
              />
              <div className="flex md:flex-row flex-col ml-[90px] gap-6 md:ml-6 mt-3">
                <div className="h-[130px]  w-[150px] rounded-2xl bg-gray-100 drop-shadow-xl ">
                  <div>
                    <h1 className="text-3xl font-Montserrat font-bold text-blue-600 ml-12 py-8">
                      25+
                    </h1>
                  </div>
                  <h1 className="text-[15px] font-sans ml-4 -mt-6 w-[150px]">
                    Businesses trust Paperplane Clinic
                  </h1>
                </div>
                <div className="h-[130px]  w-[150px] rounded-2xl bg-gray-100 drop-shadow-xl ">
                  <div>
                    <h1 className="text-3xl font-Montserrat font-bold text-blue-600 ml-12 py-8">
                      50%
                    </h1>
                  </div>
                  <h1 className="text-[15px] font-sans ml-4 -mt-6 w-[150px]">
                    Increase OPD occupancy by 50%
                  </h1>
                </div>
                <div className="h-[130px]  w-[150px] rounded-2xl bg-gray-100 drop-shadow-xl ">
                  <div>
                    <h1 className="text-3xl font-Montserrat font-bold text-blue-600 ml-12 py-8">
                      40%
                    </h1>
                  </div>
                  <h1 className="text-[15px] font-sans ml-4 -mt-6 w-[150px]">
                    increase patient retention by 40%
                  </h1>
                </div>
              </div>
            </div>
            <div className="md:w-[550px] bg-white rounded-3xl md:h-[500px] h-[690px] w-[350px] ml-4 md:ml-16 mt-3">
           <form  onSubmit={handleSumbit}>
              <div>
                <div className="flex md:flex-row flex-col justify-evenly mt-12 ml-9 md:ml-0">
                  <div className="flex flex-col ">
                    <label className="font-sans" htmlFor="name">
                      Enter your name
                    </label>
                    <input
                      className="md:w-[230px] w-[270px] rounded-md pl-4 hover:outline-slate-900 h-14 mt-2 outline-gray-400 outline outline-1"
                      type="text"
                      required
                      onChange={handleChange}
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col mt-3 md:mt-0 ">
                    <label className="font-sans" htmlFor="name">
                      Enter your phone number
                    </label>
                    <input
                      className="md:w-[230px] w-[270px] rounded-md h-14 mt-2 pl-4 hover:outline-slate-900 outline-gray-400 outline outline-1"
                      type="text"
                      pattern="[0-9]{10}"
                      required
                      onChange={handleChange}
                      name="phone"
                    />
                  </div>
                </div>

                <div className="flex md:flex-row flex-col justify-evenly md:mt-6 md:ml-7 mt-3 ml-9">
                  <div className="flex flex-col  ">
                    <label className="font-sans" htmlFor="name">
                      Please specify your business type
                    </label>
                    <select
                      className="md:w-[230px] w-[270px] rounded-md pl-4 hover:outline-slate-900 h-14 mt-2 outline-gray-400 outline outline-1"
                      id="businessType"
                      name="businessType"
                      onChange={handleChange}
                      value={formData.businessType}
                      required
                    >
                      <option selected> Business Type </option>
                      {businesstype}
                    </select>
                  </div>
                  <div className="flex flex-col md:ml-7 mt-4 md:mt-0  ">
                    <label className="font-sans" htmlFor="name">
                      How many doctors does your business have?
                    </label>
                    <select
                      className="md:w-[230px] w-[270px] rounded-md pl-4 hover:outline-slate-900 h-14 mt-2 outline-gray-400 outline outline-1"
                      id="doctorCount"
                      name="doctorCount"
                      onChange={handleChange}
                      value={formData.doctorCount}
                      required
                    >
                      <option selected> How Many </option>
                      {DoctorCount}
                    </select>
                  </div>
                </div>
                <div className="md:ml-7 md:mt-3 mt-4 ml-8 ">
                  <div className="flex flex-col w-[200px]  ">
                    <label className="font-sans" htmlFor="name">
                      What is your daily patient inbound? (Optional)
                    </label>
                    <select
                      className="md:w-[230px] w-[270px] rounded-md pl-4 hover:outline-slate-900 h-14 mt-2 outline-gray-400 outline outline-1"
                      id="inbound"
                      name="inbound"
                      value={formData.inbound}
                      onChange={handleChange}
                      required
                    >
                      <option  selected> Inbounds </option>
                      {Inbound}
                    </select>
                  </div>
                </div>
              </div>
              <button
              type="submit"
                style={{
                  background:
                    "linear-gradient(128.8deg, #4D63DD 28.61%, #22A1F5 99.07%)",
                }}
                className="md:w-1/4 w-1/3 h-14 text-white rounded-[35px] font-bold text-xl mt-5 ml-7 hover:shadow-xl "
              >
                Submit
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
