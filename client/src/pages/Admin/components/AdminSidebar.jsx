import { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../../assets/assets";
import { LayoutDashboard, ListCheckIcon, ListCollapseIcon, ListIcon, PlusSquareIcon } from "lucide-react";
const Sidebar = () => {
  const [seltedTag, setSeltedTag] = useState("DashBoad")

  const sidebarLinks = [

    { name: "DashBoad", path: "/admin",icons: LayoutDashboard },

    { name: "Add Shows", path: "/admin/add-show", icons:PlusSquareIcon},

    { name: "List Shows", path: "/admin/List-Show",icons:ListIcon },

    { name: "List Bookings", path: "/admin/List-Booking",icons:ListCollapseIcon },

  ];
  const useradmin = {
     firtname:"kiran",
     lastName:"Rathod"
  }

  return (

    <>

      <div className="md:w-64 w-16 border-r items-center h-[550px]  items-centertext-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
        <div className="w-full p-5 flex flex-col justify-center items-center border-b-2 border-primary/30 ">
          <div className="bg-red-400 w-25 h-25 rounded-full overflow-hidden ">
            <img src={assets.profile} alt="" className="w-full " />
          </div>
          <p className="font-bold mt-5">{useradmin.firtname} {useradmin.lastName}</p>
        </div>
        {sidebarLinks.map((item, index) => (
               <div className="w-full justify-center flex items-center">
                
          <Link to={item.path} key={index}
            onClick={(() => setSeltedTag(item.name))}
            
            className={`flex items-center py-3 px-4 gap-3  w-full mt-3
          
                            ${seltedTag === item.name ? "border-r-4 md:border-r-[10px] bg-primary/8 border-primary/58 text-indigo-500"

                : " hover:bg-primary/8 border-red-800 text-gray-700"

              }`

            }

          >


           
            <p className="md:block hidden text-amber-50 text-center">{item.name}</p>

          </Link>
                </div>
        ))}

      </div>

    </>

  );

};

export default Sidebar