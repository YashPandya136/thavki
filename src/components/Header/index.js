import { Link } from "gatsby";
import { useState } from "react";
import { menuItems } from "../../utilities/constants";
import Sidebar from "../Sidebar";
import { Button } from "../ui/button";
import React from "react";
import { cn } from "../../lib/utils";
import Icon from "../Icon";

const Header = () => {
  const [isShadow, setIsShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      if (window?.scrollY > 24) setIsShadow(true);
      else setIsShadow(false);
    };
  }


  return (
    <>
      <div
        className={cn(
          `sticky top-0 z-40 flex flex-col w-full px-10 py-2 lg:px-32 lg:flex-row bg-white ${isShadow ? 'shadow-secondaryBox' : 'shadow-primaryBottom'}
          }`
        )}
      >
        <div className="flex items-center justify-between w-full py-0 grow lg:w-1/3 lg:justify-start">
          <div
            onClick={toggleNavbar}
            className="block w-1/3 transition-all duration-500 ease-in-out cursor-pointer lg:hidden"
          >
            <Icon svg="Menu" className={"w-5 h-5"} />
          </div>
          <div className="flex w-2/3 cursor-pointer">
            <Link href="/">
              <Icon svg="logo" className={"flex w-40 h-20"} />
            </Link>
          </div>
        </div>
        <div className="z-10 w-full justify-center gap-y-2 hidden lg:flex flex-col lg:w-2/3 lg:opacity-100 left-[-400px] transition-all ease-in duration-500">
         
          <div className="flex items-center justify-end h-1/2">
            {menuItems.map((item) => (
              <Button variant="link" key={item.path}>
                <Link to={item.path} variant="link">
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className={`drop-shadow-4xl top-0 left-0 w-[85%] lg:hidden bg-accent fixed h-full z-40 ease-in-out transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0 invisible"
            }`}
        >
          <div className='flex'>

            <div
              className="pl-10 pt-[35px]  pb-5  cursor-pointer w-1/3"
            >
              <Icon svg="Close" className={"w-5 h-5"} onClick={toggleNavbar} />
            </div>
            <div className='w-2/3 pt-2'>
              <Icon svg="logo" className={"w-40 h-20"} />
            </div>
          </div>
          <Sidebar />
        </div>
      )}
    </>
  );
};

export default Header;
