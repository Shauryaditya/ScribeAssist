import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from "@/assets/icons/Search";
import { Filters } from "@/assets/icons/Filters";
import Notification from "../../../assets/icons/Notification.svg";
import { Delete } from "@/assets/icons/Delete";
import { Add } from "@/assets/icons/Add";
import { Next } from "@/assets/icons/Next";
const page = () => {
  const data = [
    {
      key: 1,
      name: "John Doe",
      gender: "Male",
      age: 52,
      date: "18/07/2023",
      time: "05:33 PM",
    },
    {
      key: 2,
      name: "Rebecca Green",
      gender: "Female",
      age: 27,
      date: "18/07/2023",
      time: "05:11 PM",
    },
    {
      key: 3,
      name: "John Doe",
      gender: "Male",
      age: 52,
      date: "18/07/2023",
      time: "05:33 PM",
    },
    {
      key: 4,
      name: "Rebecca Green",
      gender: "Female",
      age: 27,
      date: "18/07/2023",
      time: "05:11 PM",
    },
    {
      key: 5,
      name: "John Doe",
      gender: "Male",
      age: 52,
      date: "18/07/2023",
      time: "05:33 PM",
    },
    {
      key: 6,
      name: "Rebecca Green",
      gender: "Female",
      age: 27,
      date: "18/07/2023",
      time: "05:11 PM",
    },
    {
      key: 7,
      name: "John Doe",
      gender: "Male",
      age: 52,
      date: "18/07/2023",
      time: "05:33 PM",
    },
    {
      key: 8,
      name: "Rebecca Green",
      gender: "Female",
      age: 27,
      date: "18/07/2023",
      time: "05:11 PM",
    },
    {
      key: 7,
      name: "John Doe",
      gender: "Male",
      age: 52,
      date: "18/07/2023",
      time: "05:33 PM",
    },
  ];
  return (
    <div className="w-full h-screen">
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-between">
          <div>
            <p className="text-white  text-22 font-[400] leading-normal">
              Records
            </p>
          </div>
          {/* Search */}
          <div className="bg-[#191A29] flex justify-between items-center rounded-[10px] px-[10px] h-[40px]">
            <div className="flex h-full w-[400px]">
              <Search />
              <input
                className="bg-[#191A29] outline-none border-none h-full l "
                type=""
              />
            </div>
            <div>
              <Filters />
            </div>
          </div>

          <div>
            <Notification />
          </div>
        </div>
        <div>
          <Table className="text-white">
            <TableHeader>
              <TableRow>
                <TableHead>Paitent</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Date Added</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((ele) => (
                <TableRow className="border-borderColor" key={ele.key}>
                  <TableCell>{ele.name}</TableCell>
                  <TableCell>{ele.gender}</TableCell>
                  <TableCell>{ele.age}</TableCell>
                  <TableCell>{ele.date}</TableCell>
                  <TableCell>{ele.time}</TableCell>
                  <TableCell className="flex gap-5">
                    <Delete/>
                    <Add/>
                    <Next/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default page;
