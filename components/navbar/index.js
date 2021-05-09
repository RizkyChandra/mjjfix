import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FiBell, FiMenu, FiX } from "react-icons/fi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [nav, setNav] = useState([
    { name: "Beranda", href: "#", current: false },
    { name: "Springbed", href: "#", current: false },
    { name: "Kantor", href: "#", current: false },
    { name: "Kamar", href: "#", current: false }
  ]);
  return (
    <Disclosure as="div" className="">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="/Logo.svg"
                    alt="Logo Mobile"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="Logo.svg"
                    alt="Logo Desktop"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {nav.map((item, index) => (
                      <Menu as="div" key={index}>
                        {({ open }) => {
                          return (
                            <Menu as="div" key={item.name}>
                              <div>
                                <Menu.Button
                                  className={classNames(
                                    item.current
                                      ? "bg-red-300 text-white"
                                      : "text-red-300 hover:bg-red-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-300",
                                    "px-3 py-2 rounded-md text-sm font-medium"
                                  )}
                                >
                                  {item.name}
                                </Menu.Button>
                              </div>
                            </Menu>
                          );
                        }}
                      </Menu>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Notif dropdown */}
                <Menu as="div" className="ml-3 relative">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="bg-gray-200 p-2 rounded-full text-gray-400 hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-400 focus:ring-white focus:text-red-300 ">
                          <span className="sr-only">View notifications</span>
                          <FiBell className="h-6 w-6" aria-hidden="true" />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          <Menu.Item as="div">
                            {({ active }) => {
                              return (
                                <>
                                  <p>test</p>
                                </>
                              );
                            }}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {nav.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-red-300 text-white"
                      : "text-red-300 hover:bg-red-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
