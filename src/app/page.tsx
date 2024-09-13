"use client";

import React from "react";
import { DateButton, Button, Modal, Form } from "@/components";
import DailyList from "@/components/DailyList";
import { BsCalendarDateFill } from "react-icons/bs";
import dayjs from 'dayjs';
import useFilteredAppointments from "@/hooks/userFilteredAppointments";
import { dataSchedules } from "@/utils/constants";

export default function Home() {
  const { selectedDate, setSelectedDate, filteredAppointments } = useFilteredAppointments(dayjs(), dataSchedules);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="flex flex-col justify-start items-center min-h-screen w-full bg-gray-950 gap-3 pb-16 px-5 relative">
      <header className="flex flex-col justify-center items-start">
        <div className="-translate-x-4 w-56 h-16 bg-purple-900 rounded-br-xl mb-5 p-2 flex flex-row justify-center items-center gap-2">
          <BsCalendarDateFill className="w-8 h-8 text-purple-500" />
          <p className="text-lg font-bold text-gray-200">Schedule-App</p>
        </div>
        <div className="flex flex-col justify-center items-start max-w-[350px] gap-2 md:flex-row md:max-w-4xl md:py-3">
          <div className="w-full h-full flex-col justify-start items-center">
            <h1 className="text-3xl font-bold text-gray-100">Your Schedule</h1>
            <p className="text-sm font-normal text-gray-300">Here you can see all clients and services scheduled for today.</p>
          </div>
          <div className="flex flex-col justify-center items-center md:w-96">
            <DateButton date={selectedDate.format('DD/MM/YYYY')} setDate={(date) => setSelectedDate(dayjs(date, 'DD/MM/YYYY'))} />
          </div>
        </div>
      </header>
      <main className="w-full h-full flex flex-col gap-4 md:max-w-4xl">
        <DailyList periodOfDay="morning" dailyList={filteredAppointments.morning} />
        <DailyList periodOfDay="afternoon" dailyList={filteredAppointments.afternoon} />
        <DailyList periodOfDay="night" dailyList={filteredAppointments.night} />
      </main>
      <Modal isOpen={isModalOpen} isClose={handleOpenModal}>
        <Form onSubmit={() => { }} />
      </Modal>
      <div className="bottom-3 right-5 fixed">
        <Button title="Novo agendamento" onClick={handleOpenModal} />
      </div>
    </div>
  );
}
