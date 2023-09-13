import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { fetchBookingData } from "../../../api/admin/fetchbooking";


export default function bookingTable() {
  const [fetchData, setFetchData] = React.useState([]);
  const [search, setsearch] = React.useState('');
  const [filter, setFilterData] = React.useState([]);
  console.log(fetchData)
  useEffect(() => {
    const getData = () => {
      try {
        fetchBookingData().then((res) => {
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
      return item.name?.toLowerCase().match(search);
    });
    setFilterData(result);
  }, [search, fetchData]);

const columns = [
  {
    name : "BusinessType",
    selector: (row) => (
      <div className="font-bold font-Montserrat">
        {row.businessType}
      </div>
      )
  },
  {
    name: "BusinessInbound",
    selector: (row) => (
      <div className="font-bold font-Montserrat">
        {row.businessInbound}
      </div>
      )
  },
  {
    name: "BusinessCount",
    selector: (row) => (
    <div className="font-bold font-Montserrat">
      {row.businessCount}
    </div>
    )
  },
  {
    name: "Date",
    selector: (row) => (
      
    <div className="font-bold font-Montserrat">
      {new Date(row.createdAt).toLocaleDateString()}
    </div>
    )
  },
  {
    name: "Name",
    selector: (row) => (
    <div className="font-bold font-Montserrat">
      {row.name}
    </div>
    )
  },
  {
    name: "Phone",
    selector: (row) => (
    <div className="font-bold font-Montserrat">
      {row.phone}
    </div>
    )
  },
  {
    name: "PaymentStatus",
    selector: (row) => (
    <div className="font-bold font-Montserrat">

      {row.PaymentStatus==='Success' ? <div className="inline-block whitespace-nowrap rounded-[0.27rem] bg-green-500 e px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-white">
             {row.PaymentStatus}
            </div> : <div className="inline-block whitespace-nowrap rounded-[0.27rem] bg-orange-500 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-white">
            {row.PaymentStatus}
            </div> }
    </div>
    )
  },

];
 
  return (
    <DataTable
      title={
        <div>
          <h1 className="font-Montserrat">Booking Management</h1>
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
