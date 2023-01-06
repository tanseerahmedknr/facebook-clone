import React from "react";
import { BiSearch } from "react-icons/bi";
import { RiVideoAddFill } from "react-icons/ri";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from "./Contacts";

const RightSidebar = () => {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[220px] lg:min-w-[260]">
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow">Contacts</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <RiVideoAddFill />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <BiSearch />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <CgMoreAlt />
          </div>
        </div>
      </div>
      <Contacts
        scr="https://cdna.artstation.com/p/assets/images/images/036/067/990/large/stylessarc-por-render.jpg?1616634235"
        name="Tanseer Ahmed"
        status="Online"
      />

      <Contacts
        scr="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pumori%2C_Nepal%2C_Asia.jpg/1024px-Pumori%2C_Nepal%2C_Asia.jpg"
        name="Zakir Khan"
        status="Online"
      />

      <Contacts
        scr="https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBsYXllcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        name="Syed Saquib"
        status="Offline"
      />

      <Contacts
        scr="https://cdna.artstation.com/p/assets/images/images/036/067/990/large/stylessarc-por-render.jpg?1616634235"
        name="Mirza Azam"
        status="Online"
      />
    </div>
  );
};

export default RightSidebar;
