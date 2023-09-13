import axios from "../../axios/axios";

export const bookingFormApi = async (data) => {
  try {
    const response = await axios.post(
      "/bookingform",
      { data },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchBookingData = async () => {
  const response = await axios.get("/fetchBooking" , 
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("user")}`,
    },
  }
  );
  return response;
};

// export const paymentApi = async(total)=>{
//     try {
//         const response = await axios.post('/payment',total)
//         return response
//     } catch (error) {
//         console.log(error)
//     }
// }
