import { useEffect, useState } from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import axios from "../../axios/axios";

function AdminProtect() {
  const [auth, setAuth] = useState(null);
  const token = localStorage.getItem("admin");
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios
        .post("/admin/verify-token", {
          token,
        })
        .then((res) => {
          if (res.data.admin) {
            setAuth(true);
          } else {
            navigate("/admin/login");
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  }, [navigate,token]);

  if (auth === null) return null;

  return auth ? <Outlet /> : <Navigate to="/admin/login" />;
}

export default AdminProtect;
