import { useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [seltedTag,setSeltedTag] = useState()
   
  const sidebarLinks = [
   
    { name: "DashBoad", path: "/admin", },

    { name: "Add Shows", path: "/admin/add-show", },

    { name: "List Shows", path: "/admin/List-Show", },

    { name: "List Bookings", path: "/admin/List-Booking", },

  ];


  return (

    <>

      <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">

        {sidebarLinks.map((item, index) => (

          <Link to={item.path} key={index}
                onClick={(()=>setSeltedTag(item.name))}
            className={`flex items-center py-3 px-4 gap-3 

                            ${seltedTag === item.name ? "border-r-4 md:border-r-[6px] bg-primary/8 border-primary/25 text-indigo-500"

                : " hover:bg-primary/8 border-white text-gray-700"

              }`

            }

          >



            <p className="md:block hidden text-amber-50 text-center">{item.name}</p>

          </Link>

        ))}

      </div>

    </>

  );

};

export default Sidebar