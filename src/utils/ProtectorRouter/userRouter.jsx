import { useEffect, useState } from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import axios from "../../axios/axios";
import { toast } from "react-hot-toast";

function UserRotuer() {
  const [auth, setAuth] = useState(null);
  const token = localStorage.getItem("user");
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios
        .post("/verify-token", {
          token,
        })
        .then((res) => {
          console.log(res.data);
           if(res.data.action===true){
            toast.error('Token is Expire')
            localStorage.removeItem("user");
           }
          if (res.data.user) {
            setAuth(true);
          } else {
            navigate("/login");
          }
        });
    } catch (error) {
      console.log(error)
      
    }
  }, [navigate,token]);

  if (auth === null) return null;

  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default UserRotuer;
