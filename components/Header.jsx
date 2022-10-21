import React, { useContext, useEffect, useState, Fragment } from "react";
import Link from "next/link";

import { BeakerIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Menu, Popover, Transition } from "@headlessui/react";
import { getCategories } from "../services";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategories().then((newcategory) => setCategory(newcategory));
  }, []);

  return (
    <div className="container font-semibold  text-white mx-auto lg:px-10 px-4 mb-8">
      <div className="border-b w-full flex justify-between items-center border-blue-400 lg:py-8 py-5 capitalize">
        <div className="md:float-left ">
          <Link href="/">
            <span className="cursor-pointer font-bold lg:text-4xl text-2xl text-white">
              EliCode
            </span>
          </Link>
        </div>
        <div>
          <div className="hidden md:float-left md:flex flex-row text-center items-center">
            <Link href="/">
              <span className="px-3 text-center cursor-pointer  ">Home</span>
            </Link>
            {/*  eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/about">
              <span className="px-3 text-center cursor-pointer pt-3 ">
                About
              </span>
            </a>

            <Menu as="div" className={dr()}>
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md text-white font-semibold px-4 py-2 text-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  Tutorials
                  <ChevronDownIcon
                    className="ml-2 -mr-1 h-5 w-5 "
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute text-gray-700 right-0 mt-2 w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 flex justify-center focus:outline-none">
                  <div className="px-1 py-4 flex flex-col gap-5  ">
                    {category.map((item) => (
                      <Menu.Item key={item.slug}>
                        <a key={item.slug} href={`/category/${item.slug}`}>
                          <span className="px-2 py-3">{item.name}</span>
                        </a>
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <a href="/contact">
              <span className="px-3 text-center cursor-pointer pt-3 ">
                Contact
              </span>
            </a>
            <a href="/templates">
              <span className="px-3 text-center cursor-pointer pt-3 ">
                Templates
              </span>
            </a>
          </div>
        </div>

        <div className=" md:hidden">
          <span
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={`animate-spin`}
          >
            {isOpen ? (
              <XMarkIcon className="h-7 w-7 text-white" />
            ) : (
              <Bars3Icon className="h-7 w-7 text-white" />
            )}
            <span className="sr-only">
              {isOpen ? "Close Menu" : "Open Menu"}
            </span>
          </span>
        </div>

        <div
          className={`${
            isOpen ? "flex opacity-100" : "hidden opacity-70"
          } mx-auto absolute top-20 z-50 bottom-0 left-0 w-full h-3/5 bg-gray-500 transition  px-4 md:hidden bg-opacity-60`}
        >
          <div className="w-full bg-gray-100  text-gray-700">
            <div className="flex flex-col py-5 px-3 justify-center gap-10">
              <div className="flex-col flex border-b border-blue-400 py-5 gap-3">
                {category.map((item) => {
                  return (
                    <a key={item.slug} href={`/category/${item.slug}`}>
                      <span className="px-1 capitalize py-1">{item.name}</span>
                    </a>
                  );
                })}
              </div>
              <div className=" items-center flex flex-col">
                <Link className="py-3 px-3" href="/">
                  <span className="py-1 cursor-pointer ">Home</span>
                </Link>
                <Link className="py-3 px-3" href="/about">
                  <span className="py-1 cursor-pointer ">About</span>
                </Link>
                <Link className="py-3 px-3" href="/security">
                  <span className="py-1 cursor-pointer ">Contact</span>
                </Link>
                <Link className="py-3 px-3" href="/integrations">
                  <span className="py-1 cursor-pointer ">Templates</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function dr() {
    return "relative inline-block text-left z-50";
  }
};

export default Header;
