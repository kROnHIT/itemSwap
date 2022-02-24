/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    SupportIcon,
    XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { BsGearFill } from "react-icons/bs";
import logo from "../../assets/logo.png";

const solutions = [
    {
        name: "Market",
        description:
            "Get a better understanding of where your traffic is coming from.",
        href: "#",
        icon: ChartBarIcon,
    },
];
const callsToAction = [
    { name: "Watch Demo", href: "#", icon: PlayIcon },
    { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
    {
        name: "Help Center",
        description:
            "Get all of your questions answered in our forums or contact support.",
        href: "#",
        icon: SupportIcon,
    },
    {
        name: "Guides",
        description:
            "Learn how to maximize our platform to get the most out of it.",
        href: "#",
        icon: BookmarkAltIcon,
    },
    {
        name: "Events",
        description:
            "See what meet-ups and other events we might be planning near you.",
        href: "#",
        icon: CalendarIcon,
    },
    {
        name: "Security",
        description: "Understand how we take your privacy seriously.",
        href: "#",
        icon: ShieldCheckIcon,
    },
];
const recentPosts = [
    { id: 1, name: "Boost your conversion rate", href: "#" },
    {
        id: 2,
        name: "How to use search engine optimization to drive traffic to your site",
        href: "#",
    },
    { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    return (
        <Popover className="sticky top-0 z-50 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#" className="flex items-center justify-center">
                            <img src={logo} className="mr-2 w-12" />
                            <span className="text-xl font-bold">Item</span>
                            <span className="text-xl font-bold text-cyan-500">Swap</span>
                        </a>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                        <a
                            href="#"
                            className="text-base font-extrabold hover:text-gray-900"
                        >
                            Market
                        </a>
                    </Popover.Group>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        <div className="mr-5 flex items-center justify-center rounded-full bg-cyan-500 p-0.5 pr-3 text-[13px] text-white">
                            <div className="mr-3 rounded-full bg-white p-1">
                                <img src={logo} className="w-8" />
                            </div>
                            $ 6.500
                        </div>
                        <a
                            href="#"
                            className="mr-3 rounded-full bg-cyan-500 p-2.5 px-4 text-white"
                        >
                            Connect Wallet
                        </a>
                        <a href="#">
                            <BsGearFill size={30} className="mr-3 text-cyan-500" />
                        </a>
                        <a href="#">
                            <HiOutlineGlobeAlt size={34} className="text-cyan-500" />
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
                <Popover.Panel
                    focus
                    className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
                >
                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <div className="justify-left flex items-center">
                                    <a href="#" className="flex items-center justify-center">
                                        <img
                                            src={logo}
                                            className="mr-2 w-12"
                                        />
                                        <span className="text-xl font-bold">Item</span>
                                        <span className="text-xl font-bold text-[#1bbcd5]">
                                            Swap
                                        </span>
                                    </a>
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {solutions.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                        >
                                            <item.icon
                                                className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                                aria-hidden="true"
                                            />
                                            <span className="ml-3 text-base font-medium text-gray-900">
                                                {item.name}
                                            </span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}
