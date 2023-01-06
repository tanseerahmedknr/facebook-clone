import Image from "next/image";
import React from "react";
import { ImUsers } from "react-icons/im";
import Sidebaritems from "./Sidebaritems";
import {
  MdGroups,
  MdOutlineOndemandVideo,
  MdOutlineExpandMore,
} from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import { useSession } from "next-auth/react";

const Siderbar = () => {
  const { data: session } = useSession();
  return (
    <div className="hidden lg:inline-flex flex-col py-3 pl-2 max-w-xl lg:min-w-[320px]">
      <div className="flex items-center space-x-2 py-2 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer ">
        <Image
          src={session?.user.image}
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        />
        <p className="hidden sm:inline-flex font-medium">
          {session?.user.name}
        </p>
      </div>

      <Sidebaritems Icons={ImUsers} value="Users" />
      <Sidebaritems Icons={MdGroups} value="Groups" />
      <Sidebaritems Icons={AiOutlineShop} value="Marketplace" />
      <Sidebaritems Icons={MdOutlineOndemandVideo} value="Watch" />
      <Sidebaritems Icons={BsStopwatch} value="Memories" />
      <Sidebaritems Icons={MdOutlineExpandMore} value="See More" />
    </div>
  );
};

export default Siderbar;
