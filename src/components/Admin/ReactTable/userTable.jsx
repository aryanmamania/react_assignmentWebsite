import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { AiFillLock } from "react-icons/ai";
import {  toast } from "react-hot-toast";
import { AiFillUnlock } from "react-icons/ai";
import { userBlockApi, userFetchapi } from "../../../api/admin/userFetch";


export default function UserTable() {
  const [fetchData, setFetchData] = React.useState([]);
  const [search, setsearch] = React.useState('');
  const [filter, setFilterData] = React.useState([]);

  useEffect(() => {
    const getData = () => {
      try {
        userFetchapi().then((res) => {
          setFetchData(res.data.fetch);
          setFilterData(res.data.fetch);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const result = fetchData?.filter((item) => {
      return item.email?.toLowerCase().match(search);
    });
    setFilterData(result);
  }, [search, fetchData]);

const columns = [
  {
    name : "Email",
    selector: (row) => (
      <div className="font-bold font-Montserrat">
        {row.email}
      </div>
      )
  },
  {
    name: "phone",
    selector: (row) => (
      <div className="font-bold font-Montserrat">
        {row.phone}
      </div>
      )
  },
  {
    name: "Password",
    selector: (row) => (
    <div className="font-bold font-Montserrat">
      {row.password}
    </div>
    )
  },

  {
    name: "Action",
    selector: (row) => (
      <div onClick={()=> handleBlock(row._id)}>
         
           {
            row.action===true ?  <button className="text-2xl  text-green-500">
            <AiFillUnlock />
          </button> :  <button className="text-2xl text-red-700">
            < AiFillLock/>
          </button>
           }
         
         
        
      </div>
    ),
  },
];

const handleBlock = (id)=>{
   userBlockApi(id).then((res)=>{
    if(res.data.check){
      setFetchData(res.data.fetch)
      setFilterData(res.data.fetch)
      toast.success('User UnBlocked')
    
      
    }else{
      setFetchData(res.data.fetch)
      setFilterData(res.data.fetch)
      toast.error('User Blocked')
    }
   
    
   })
  
}
  
  return (
    <DataTable
      title={
        <div>
          <h1 className="font-Montserrat">User Management</h1>
        </div>
      }
      data={filter}
      columns={columns}
      fixedHeader
      subHeader
      subHeaderComponent={
        <input
          type="text"
          placeholder="Search"
          className="shadow appearance-none border rounded  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline "
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
      }
    />
  );
}
