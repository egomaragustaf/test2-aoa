"use client";

import {
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandInstagram,
} from "@tabler/icons-react";

export function Footer() {
  return (
    <div className="bg-slate-200 mt-20 pt-20">
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <IconBrandInstagram className="h-8 w-auto mb-6" />
          <p className="mb-4">
            <strong className="font-medium">KeDa Tech</strong> is your ultimate
            business companion!.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <IconBrandFacebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <IconBrandTwitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <IconBrandInstagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">
            {" "}
            &copy;{new Date().getFullYear()} - KeDa Tech
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-[#0366fd] cursor-pointer transition-all">
              Home{" "}
            </li>
            <li className="my-2 hover:text-[#0366fd] cursor-pointer transition-all">
              About{" "}
            </li>
            <li className="my-2 hover:text-[#0366fd] cursor-pointer transition-all">
              Pricing{" "}
            </li>
            <li className="my-2 hover:text-[#0366fd] cursor-pointer transition-all">
              Contact{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-[#0366fd] cursor-pointer transition-all">
              KeDa Tech ?{" "}
            </li>
            <li className="my-2 hover:text-[#0366fd] cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-[#0366fd] cursor-pointer transition-all">
              Tutorials{" "}
            </li>
            <li className="my-2 hover:text-[#0366fd] cursor-pointer transition-all">
              About{" "}
            </li>
            <li className="my-2 hover:text-[#0366fd] cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-[#0366fd] cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Earn Money</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-[#0366fd] cursor-pointer transition-all">
              Affiliate{" "}
            </li>
            <li className="my-2 hover:text-[#0366fd] cursor-pointer transition-all">
              Become Partner{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
