"use client";
import React, { useEffect, useState } from "react";
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
import { BASE_URL } from "@/constant";
import getToken from "@/hook/getToken";
import { redirect } from 'next/navigation'
const Records = () => {
  const [response, setResponse] = useState([]);
  const access_token = getToken()
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/api/get-patient-list?page=1&limit=10`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setResponse(data.response);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchRecords();
  }, [access_token]);
  const deletePatient = async (id) => {
    const data = { id: id };
    try {
      const response = await fetch(`${BASE_URL}/api/delete-patient-details`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Error deleting the patient");
      }
      if (response.ok) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const [token, setToken] = useState(null)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accessToken = getToken()
      setToken(accessToken)
      if (!accessToken) {
        redirect('/login');
      }
    }
  }, []);
  if (token !== null) {
    return (
      <div className="relative min-h-screen bg-[#222331] w-full  flex flex-col justify-between p-[40px]">
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
                {response.map((ele) => {
                  return (
                    <Tr key={ele._id}>
                      <Td>{ele.patient_name}</Td>
                      <Td>{ele.patient_gender}</Td>
                      <Td>{ele.patient_age}</Td>
                      <Td>{ele.created_at.slice(0, 16)}</Td>
                      <Td>{ele.created_at.slice(16)}</Td>
                      <Td>
                        <Box
                          display={"flex"}
                          gap={"1rem"}
                          justifyContent={"flex-end"}
                        >
                          <button onClick={() => deletePatient(ele._id)}>
                            <Delete />
                          </button>
                          <Add />
                          <a href={`/notes?id=${ele._id}`}><Next /></a>
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
      </div >
    );
  }
};

export default Records;
