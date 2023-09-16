"use client";
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import { Delete } from "@/assets/icons/Delete";
import { Add } from "@/assets/icons/Add";
import { Next } from "@/assets/icons/Next";
import LeftArrow from "../../../assets/LeftArrow.svg";
import RightArrow from "../../../assets/RightArrow.png";
import PaginationOne from "../../../assets/PaginationOne.png";
import PaginationTwelve from "../../../assets/PaginationTwelve.png";
import PaginationMulti from "../../../assets/PaginationMulti.png";
import Image from "next/image";

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
    <div className="relative min-h-full bg-[#222331] w-full h-screen flex flex-col justify-between p-[40px]">
      <div>
        <TableContainer color={"white"} w={"full"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Patient</Th>
                <Th>Gender</Th>
                <Th>Age</Th>
                <Th>Date Added</Th>
                <Th>Time</Th>
                <Th textAlign={"right"}>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((ele) => {
                return (
                  <Tr key={ele.key}>
                    <Td>{ele.name}</Td>
                    <Td>{ele.gender}</Td>
                    <Td>{ele.age}</Td>
                    <Td>{ele.date}</Td>
                    <Td>{ele.time}</Td>
                    <Td>
                      <Box
                        display={"flex"}
                        gap={"1rem"}
                        justifyContent={"flex-end"}
                      >
                        <Delete />
                        <Add />
                        <Next />
                      </Box>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      <div className="flex gap-2 self-end cursor-pointer">
        <button>
          <LeftArrow />
        </button>
        <button>
          <Image src={PaginationOne} alt="" />
        </button>
        <button>
          <Image src={PaginationMulti} alt="" />
        </button>
        <button>
          <Image src={PaginationTwelve} alt="" />
        </button>
        <button>
          <Image src={RightArrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default page;
