import React, {Fragment} from 'react';
import {Disclosure, Popover, Transition} from "@headlessui/react";
import {Bars3Icon, CheckIcon, ChevronDownIcon, ChevronRightIcon, XMarkIcon} from "@heroicons/react/24/outline";

const menus = [
    {
        name: 'Menu 1',
        description: 'Ini adalah menu 1',
        href: '#',
        icon: CheckIcon,
    },
    {
        name: 'Menu 2',
        description: 'Ini adalah menu 2',
        href: '#',
        icon: CheckIcon,
        children: [
            {
                name: 'Menu 2.1',
                description: 'Ini adalah menu 2.1',
                href: '#',
                icon: CheckIcon,
            },
            {
                name: 'Menu 2.2',
                description: 'Ini adalah menu 2.2',
                href: '#',
                icon: CheckIcon,
            }
        ]
    },
    {
        name: 'Menu 3',
        description: 'Ini adalah menu 3',
        href: '#',
        icon: CheckIcon,
        children: [
            {
                name: 'Menu 3.1',
                description: 'Ini adalah menu 3.1',
                href: '#',
                icon: CheckIcon,
            },
            {
                name: 'Menu 3.2',
                description: 'Ini adalah menu 3.2',
                href: '#',
                icon: CheckIcon,
            }
        ]
    },
    {
        name: 'Menu 4',
        description: 'Ini adalah menu 4',
        href: '#',
        icon: CheckIcon,
    }
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

function Header() {
    return (
        <Popover className="relative bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center w-full justify-between py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        Logo
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                        )}
                                    >
                                        <span>Solutions</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {menus.map((item) => {
                                                        if (item.children) {
                                                            return (
                                                                <Disclosure as="div" key={item.name} className="relative -mr-6">
                                                                    {({ open }) => (
                                                                        <>
                                                                            <Disclosure.Button className="-m-3 p-3 flex w-full items-start rounded-lg hover:bg-gray-50">
                                                                                <div className="flex w-full">
                                                                                    <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                                                    <div className="ml-4">
                                                                                        <p className="text-left font-medium text-gray-900">
                                                                                            {item.name}
                                                                                        </p>
                                                                                        <p className="mt-1 text-sm text-gray-500">
                                                                                            {item.description}
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                                <ChevronRightIcon className={`${open ? "rotate-90" : ""} ml-auto my-auto h-5 w-5 justify-end text-gray-400 items-center`} aria-hidden="true" />
                                                                            </Disclosure.Button>
                                                                            <Disclosure.Panel className="p-3 mt-5 mr-3 bg-gray-50 rounded-lg">
                                                                                {item.children.map((child) => (
                                                                                    <a className="p-3 pl-4 flex items-start rounded-lg hover:bg-gray-100"
                                                                                       key={child.name}
                                                                                    >
                                                                                        <child.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                                                        <div className="ml-4">
                                                                                            <p className="text-base font-medium text-gray-900">
                                                                                                {child.name}
                                                                                            </p>
                                                                                            <p className="mt-1 text-sm text-gray-500">
                                                                                                {child.description}
                                                                                            </p>
                                                                                        </div>
                                                                                    </a>
                                                                                ))}
                                                                            </Disclosure.Panel>
                                                                        </>
                                                                    )}
                                                                </Disclosure>
                                                            )
                                                        }

                                                        return (
                                                            <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                               key={item.name}
                                                            >
                                                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                                <div className="ml-4">
                                                                    <p className="text-base font-medium text-gray-900">
                                                                        {item.name}
                                                                    </p>
                                                                    <p className="mt-1 text-sm text-gray-500">
                                                                        {item.description}
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                <Popover.Button
                                    className={classNames(
                                        open ? 'text-gray-900' : 'text-gray-500',
                                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                    )}
                                >
                                    <span>More</span>
                                    <ChevronDownIcon
                                        className={classNames(
                                            open ? 'text-gray-600' : 'text-gray-400',
                                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                                        )}
                                        aria-hidden="true"
                                    />
                                </Popover.Button>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                {menus.map((item) => {
                                                    if (item.children) {
                                                        return (
                                                            <Disclosure as="div" key={item.name} className="relative -mr-6">
                                                                {({ open }) => (
                                                                    <>
                                                                        <Disclosure.Button className="-m-3 p-3 flex w-full items-start rounded-lg hover:bg-gray-50">
                                                                            <div className="flex w-full">
                                                                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                                                <div className="ml-4">
                                                                                    <p className="text-left font-medium text-gray-900">
                                                                                        {item.name}
                                                                                    </p>
                                                                                    <p className="mt-1 text-sm text-gray-500">
                                                                                        {item.description}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <ChevronRightIcon className={`${open ? "rotate-90" : ""} ml-auto my-auto h-5 w-5 justify-end text-gray-400 items-center`} aria-hidden="true" />
                                                                        </Disclosure.Button>
                                                                        <Disclosure.Panel className="p-3 mt-5 mr-3 bg-gray-50 rounded-lg">
                                                                            {item.children.map((child) => (
                                                                                <a className="p-3 pl-4 flex items-start rounded-lg hover:bg-gray-100"
                                                                                   key={child.name}
                                                                                >
                                                                                    <child.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                                                    <div className="ml-4">
                                                                                        <p className="text-base font-medium text-gray-900">
                                                                                            {child.name}
                                                                                        </p>
                                                                                        <p className="mt-1 text-sm text-gray-500">
                                                                                            {child.description}
                                                                                        </p>
                                                                                    </div>
                                                                                </a>
                                                                            ))}
                                                                        </Disclosure.Panel>
                                                                    </>
                                                                )}
                                                            </Disclosure>
                                                        )
                                                    }

                                                    return (
                                                        <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                           key={item.name}
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">
                                                                    {item.name}
                                                                </p>
                                                                <p className="mt-1 text-sm text-gray-500">
                                                                    {item.description}
                                                                </p>
                                                            </div>
                                                        </a>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                                </>
                            )}
                        </Popover>
                    </Popover.Group>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            Sign in
                        </a>
                    </div>
                </div>
            </div>
            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    Logo
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {menus.map((item) => {
                                if(item.children) {
                                    return (
                                        <Disclosure as="div" key={item.name} className="relative">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="group w-full rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 flex justify-between items-center">
                                                        <span>{item.name}</span>
                                                        <ChevronRightIcon className={`${open ? "rotate-90" : ""} ml-auto h-5 w-5 text-gray-400 group-hover:text-gray-500`} aria-hidden="true" />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="px-4 py-3">
                                                        {item.children.map((child) => (
                                                            <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                                               key={child.name}
                                                            >
                                                                {child.name}
                                                            </a>
                                                        ))}
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    )
                                }else {
                                    return (
                                        <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                             key={item.name}
                                        >
                                            {item.name}
                                        </a>
                                    )
                                }
                            }
                            )}
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}

export default Header;
