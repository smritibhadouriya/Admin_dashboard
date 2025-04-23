import React, { useEffect, useState } from "react";
import { Users } from "../data/mockData.js";
import { useNavigate } from "react-router-dom";
import Belownav from "../components/belownav";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { UserPlus, X } from "lucide-react";
import Profile from "../assets/profile.jpeg";
import { MaterialReactTable, MRT_FilterFns,MRT_EditActionButtons, MRT_EditCellTextField } from "material-react-table";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton, Tooltip } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { ToastContainer, toast } from 'react-toastify';


const UserList = () => {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [Uname, setUname] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setData(Users);
  }, []);

  const handleBack = () => {
    navigate("/dash");
  };

  const handleClose = () => {
    setSelectedUser(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const dt = [...data];
    const newObj = {
      id: Users.length + 1,
      name: Uname,
      email: email,
      role: role,
      phone: phone,
      age: age,
      city: city,
    };
    dt.push(newObj);
    setData(dt);
    toast.success("User Added Successfully!");
    setShowForm(false);
    setEmail("");
    setPhone("");
    setRole("");
    setUname("");
    setCity("");
    setAge("")
  };

  const columns = [
    {
      header: "Profile",
      Cell: ({ row }) => {
        return (
          <img
            src={Profile} 
            alt={row.original.name}
            className="h-10 w-10 rounded-full object-cover"
          />
        );
      },
      enableEditing:false
    },

    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
      enableClickToCopy: true, 
    },
    {
      accessorKey: "role",
      header: "Role",
      editVariant: 'select',
      editSelectOptions: [
        { value: "", label: "Select Role" },
        { value: "Affiliate", label: "Affiliate" },
        { value: "Advertiser", label: "Advertiser" },
        { value: "Employee", label: "Employee" },
        { value: "Admin", label: "Admin" },
      ],
    }
    ,
    {
      accessorKey: "phone",
      header: "Phone",
    },
    {
      accessorKey: "age",
      header: "Age",
      filterVariant: 'range-slider',
        filterFn: 'betweenInclusive', // default (or between)
        muiFilterSliderProps: {
          marks: true,
          max: 50, 
          min: 18, 
          step: 10,

        }
    },
   
  ];

const confirmToast = (message, onConfirm) => {
  const toastId = toast(
    ({ closeToast }) => (
      <div className="flex flex-col gap-2">
        <p>{message}</p>
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => {
              onConfirm();
              toast.dismiss(toastId);
            }}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Yes
          </button>
          <button
            onClick={() => toast.dismiss(toastId)}
            className="bg-gray-300 text-black px-3 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    ),
    {
      autoClose: false,
      closeOnClick: false,
      draggable: false,
      closeButton: false,
      position: "top-center",
    }
  );
};


  const handleEdit = async ({ values, table }) => {
    // Do your save logic here, e.g., API call
    toast.info(`Saved changes for ${values.name}`);
  
    // Close edit mode
    table.setEditingRow(null);
  };
  
  
  
  

  const handleDelete = (row) => {
   
   confirmToast(`Are you sure you want to delete ${row.original.name}'s record?`,()=> {
      setData((prev) => prev.filter((u) => u.id !== row.original.id));
      toast.error("Data Deleted")
    });
  };

  
  return (
    <>
    
      <div className="flex flex-col">
        <div className="hidden md:block">
          <Navbar />
        </div>

        <Sidebar />

        <div className="flex-1 p-4 w-100 md:w-200 bg-stone-100 absolute top-0 md:top-12 left-0.5 md:left-60 lg:w-330 md:max-w-320">
          <div
            className={`w-full px-4 py-6 bg-stone-100 absolute left-0 md:left-2 ${
              selectedUser || showForm ? "blur-sm pointer-events-none" : ""
            }`}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer text-blue-700 hover:text-blue-900 transition duration-200"
                  onClick={handleBack}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                <h2 className="ml-2 text-lg font-semibold text-gray-700">
                  Back
                </h2>
              </div>

              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700  transition shadow lg:mr-5"
              >
                <span className="text-sm font-medium">New User</span>
                <UserPlus className="w-5 h-4" />
              </button>
            </div>

            
            
            <MaterialReactTable
              columns={columns}
              data={data}
             initialState={{pagination:{pageSize: 5}}}
             enableColumnFilters
              enableExpanding
              enableRowActions
              enableEditing
              enableColumnOrdering
              createDisplayMode="modal"
              editDisplayMode="row"
              onEditingRowSave={handleEdit}
             positionActionsColumn="last"

             renderRowActions={({ row, table }) => {
               const isEditing = table.getState().editingRow?.id === row.id;
             
               return (
                 <Box sx={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                   {isEditing ? (
                     <Tooltip title="Save">
                       <IconButton
                         color="primary"
                         onClick={() => {
                          table.options.onEditingRowSave?.({ values: row.getValue(), table });
                        }}
                       >
                         <SaveIcon />
                       </IconButton>
                     </Tooltip>
                   ) : (
                     <>
                       <Tooltip title="Edit">
                         <IconButton onClick={() => table.setEditingRow(row)}>
                           <EditIcon />
                         </IconButton>
                       </Tooltip>
                       <Tooltip title="Delete">
                         <IconButton color="error" onClick={() => handleDelete(row)}>
                           <DeleteIcon />
                         </IconButton>
                       </Tooltip>
                     </>
                   )}
                 </Box>
               );
             }}
            
              renderDetailPanel={({ row }) => {
                const user = row.original;
                return (
                  <div className="p-6 bg-white rounded-2xl shadow-xl border border-gray-200 mt-3 flex  gap-6">
                    {/* Profile Image */}
                    <div className="flex  justify-start ">
                      <img
                        src={Profile}
                        alt="Profile"
                        className="rounded-xl w-36 h-36 object-cover border-4 border-blue-500 shadow-md"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <h2 className="text-xl font-semibold text-gray-800">
                            {user.name}
                          </h2>
                          <p className="text-sm text-gray-500">
                            Role:{" "}
                            <span className="text-blue-600 font-medium">
                              {user.role}
                            </span>
                          </p>
                          <p className="text-sm text-gray-500">
                            Email:{" "}
                            <span className="text-gray-700">{user.email}</span>
                          </p>
                          <p className="text-sm text-gray-500">
                            Phone:{" "}
                            <span className="text-gray-700">{user.phone}</span>
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            Age:{" "}
                            <span className="text-gray-700">{user.age}</span>
                          </p>
                          <p className="text-sm text-gray-500">
                            Status:{" "}
                            <span className="text-green-600 font-semibold">
                              Active
                            </span>
                          </p>
                          <p className="text-sm text-gray-500">
                            Address:{" "}
                            <span className="text-gray-700">
                              {user.city || "N/A"}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }}
            />

            {/* Mobile Bottom Nav */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg">
              <Belownav />
            </div>
          </div>

      

          {/* Add User Modal */}
          {showForm && (
  <div className="fixed inset-0 z-50 flex justify-center items-center bg-blur bg-opacity-0">

    <div className="relative w-full max-w-5xl bg-white shadow-2xl rounded-2xl p-10 mx-6 lg:ml-25">
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
      >
        <X size={28} />
      </button>

      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Add New User
      </h1>

      <form
        onSubmit={handleFormSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <input
          type="text"
          placeholder="John Doe"
          value={Uname}
          onChange={(e) => setUname(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          required
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          required
        >
          <option value="">Select Role</option>
          <option value="Affiliate">Affiliate</option>
          <option value="Advertiser">Advertiser</option>
          <option value="Employee">Employee</option>
          <option value="Admin">Admin</option>
        </select>
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          required
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          required
        />
        <input
          type="email"
          placeholder="mail@website.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          required
        />
        <input
          type="tel"
          placeholder="123-456-7890"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          required
        />

        <div className="lg:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold text-lg transition-all duration-300"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  </div>
)}

        </div>
      </div>
    </>
  );
};

export default UserList;
