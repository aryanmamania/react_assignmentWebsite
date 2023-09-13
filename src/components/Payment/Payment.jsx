import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../LandingPage/navbar/NavBar";
import pymntbg from "../../assets/pybg.jpg";
import visa from "../../assets/payment.svg";
import Footer from "../LandingPage/footer/Footer";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import { SiGooglepay } from "react-icons/si";
import { BsCurrencyRupee } from "react-icons/bs";
import { fetchBookingData } from "../../api/user/bookingApi";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'
import { toast } from "react-hot-toast";

export default function Payment() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState([]);
  const [change, setChange] = useState(true);
  console.log(formData);
  useEffect(() => {
    const fetchData = () => {
      fetchBookingData().then((res) => {
        setFormData(res.data.fetch);
      });
    };
    fetchData();
  }, []);

  //payment Razorpay
  async function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

const submitPayment = async(total,name,phone,ID)=>{
    console.log(total)
    try {
        await loadScript("https://checkout.razorpay.com/v1/checkout.js");
        try {
            const {data} = await axios.post('http://localhost:2222/api/payment',{data:`${total}`},{ withCredentials: true,})
            console.log(data)
            const options = {
                key: "rzp_test_PfFqcsjDxItbTr",
                currency: data.order.currency,
                amount: data.order.amount.toString(),
                order_id: data.order.id,
                name: "PaperPlan",
                description: "Payment for your service",
                image: `${logo}`,
                handler: async function (response) {
              
                  const paymentData = {
                    orderCreationId: data.order.id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                    BookingID:ID
                   
                  };
                 
                  try {
                     const result = await axios.post('http://localhost:2222/api/paymentsuccess',{paymentData},{ withCredentials: true,})
                     console.log(result.data);
                     if(result.data.success===true){
                        toast.success('payment success')
                      navigate('/',{state: "payment"})
                     }
                    
                  } catch (error) {
                    console.log(error);
                    
                    
                  }
                },
                prefill: {
                    name: name,
                    phone: phone,
                    
                  },
                theme: {
                  color: "#ADD8E6",
                },
              };
      
              const paymentObject = new window.Razorpay(options);
              paymentObject.open();
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        console.log(error)
    }
}

  return (
    <>
      <NavBar />
      <div className="mt-20">
        <div
          className="w-full md:h-[530px] h-[450px] "
          style={{
            backgroundImage: `url(${pymntbg})`,
          }}
        >
          <div className="md:ml-[500px] ">
            <h1 className="md:text-[50px] text-3xl ml-[100px] md:ml-0 font-semibold md:py-[100px] py-[50px] ">
              Introducing
            </h1>
            <h1 className="md:text-[50px] font-bold text-purple-700 text-4xl  ml-[30px] -mt-[40px] md:-mt-[70px] md:-ml-20  ">
              Buy Now, Pay Later
            </h1>
            <h1 className="md:text-3xl text-xl font-semibold] ml-[10px] md:mt-3  md:-ml-28">
              Instant Credit for your health on a click!
            </h1>
          </div>
          <div className="md:ml-[420px] md:mt-0 mt-6">
            <img
              className="md:w-[350px] w-[300px] ml-10 -mt-7 h-[250px] md:h-[300px]  md:-mt-5"
              src={visa}
              alt="visa_img"
            />
          </div>
        </div>
        <div className="w-full shadow-xl drop-shadow-2xl shadow-slate-400 h-7 -mt-[29px] "></div>
        <div
          className={`flex justify-center items-center  ${
            change ? "h-[650px]" : "h-[400px]"
          } `}
        >
          {change ? (
            <div
              className={`md:w-2/3 w-[390px] bg-slate-200 ${
                change ? "h-[550px]" : "h-[400px]"
              } rounded-xl`}
            >
              <div className="flex justify-center items-center">
                <h1 className="md:text-3xl  text-xl font-sans font-semibold mt-10">
                  With Buy Now, Pay Later you get
                </h1>
              </div>
              <div className="flex justify-evenly mt-10 md:ml-[100px]">
                <div className="md:w-[250px] ml-7 ">
                  <img
                    className="md:w-16 w-14 ml-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 duration-300"
                    src={img1}
                    alt="img1-png"
                  />
                  <h1 className="font-bold md:text-lg  font-Montserrat md:-ml-7 mt-2">
                    Under 1 Minute approval
                  </h1>
                  <h1 className="font-semibold md:-ml-7">
                    By putting your health ahead of paperwork and logistics
                  </h1>
                </div>
                <div className="md:w-[300px] ml-7">
                  <img
                    className="md:w-16 w-14 ml-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 duration-300"
                    src={img2}
                    alt="img1-png"
                  />
                  <h1 className="font-bold md:text-lg font-Montserrat -ml-7 mt-2">
                    Repayments via WhatsApp
                  </h1>
                  <h1 className="font-semibold md:-ml-7">
                    Pay securely via whatsapp without downloading or using any
                    application
                  </h1>
                </div>
              </div>
              <div className="flex justify-evenly md:mt-10 md:ml-[80px]">
                <div className="md:w-[250px] ml-7  ">
                  <img
                    className="md:w-16 w-14 ml-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 duration-300"
                    src={img3}
                    alt="img1-png"
                  />
                  <h1 className="font-bold md:text-lg font-Montserrat md:-ml-7 mt-2">
                    Flexible Payment Tenure
                  </h1>
                  <h1 className="font-semibold md:-ml-7">
                    Now you decide when and how much to pay in installments
                  </h1>
                </div>
                <div className="md:w-[250px] ml-7">
                  <img
                    className="md:w-16 w-14 ml-9 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 duration-300"
                    src={img4}
                    alt="img1-png"
                  />
                  <h1 className="font-bold md:text-lg font-Montserrat md:-ml-7 mt-2">
                    No Third-party intervention
                  </h1>
                  <h1 className="font-semibold -ml-7">
                    Seamless transaction through Paperplane
                  </h1>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => setChange(false)}
                  className={`mt-10 text-purple-600 text-xl font-Montserrat  transition ease-in-out delay-150 ${formData?.length>= 1 ? 'block' : 'hidden'}  hover:-translate-y-1 hover:scale-100 duration-300`}
                >
                 Booking Summary
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        BusinessType
                      </th>
                      <th scope="col" className="px-6 py-3">
                        DoctorCount
                      </th>
                      <th scope="col" className="px-6 py-3">
                        BusinessInbound
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Phone
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Payment Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Pay</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.map((data, i) => {
                      return (
                        <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {data.businessType}
                          </th>
                          <td className="px-6 py-4">{data.businessCount}</td>
                          <td className="px-6 py-4">{data.businessInbound}</td>
                          <td className="px-6 py-4">{data.name}</td>
                          <td className="px-6 py-4">{data.phone}</td>
                          <td className={`px-6 py-4 ${data.PaymentStatus==='Pending' ? 'text-orange-500' : 'text-green-600' }  font-semibold `}>{data.PaymentStatus}</td>
                          <td className="px-6 py-4 ">
                            <div className="flex">
                            <span className="mt-[3px]"><BsCurrencyRupee/></span>
                            {data.TotalAmount}
                            </div>
                           
                          </td>
                        {
                          data.PaymentStatus==='Pending' ? <td className="px-6 py-4 text-right flex">
                          <h1 onClick={()=>submitPayment(data.TotalAmount,data.name,data.phone,data._id)} className="text-4xl text-blue-700 cursor-pointer ">
                            <SiGooglepay />
                          </h1>
                        </td>  : ''  
                        }
                          
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
