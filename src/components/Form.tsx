'use client';

import { IoPerson } from 'react-icons/io5';
import DateButtonComponent from './DateButton/DateButtomComponent';
import BasicTimePicker from './TimeButton/TimeButton';
import InputPhone from './InputPhone';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useScheduleForm from '@/hooks/useScheduleForm';

export default function Form() {
  const {
    name,
    phone,
    scheduleDescription,
    scheduleTime,
    handleChange,
    handleDateChange,
    handleSubmit,
    setPhone,
  } = useScheduleForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-3 w-full z-50 p-6"
    >
      <ToastContainer
        toastClassName={
          'text-sm font-bold text-gray-800 bg-primary border-l-4 border-purple-600 shadow-md'
        }
        theme="dark"
      />
      <header className="flex flex-col justify-center items-start w-full gap-2">
        <h1 className="text-2xl font-bold text-gray-200">
          Schedule your appointment
        </h1>
        <p className="text-xs font-normal text-texting">
          Please fill in the customer details to schedule the appointment.
          Ensure you include all necessary information to guarantee efficient
          and personalized service.
        </p>
      </header>

      <div className="flex flex-col justify-center items-start gap-1 w-full">
        <label htmlFor="name" className="text-xs font-bold text-gray-200">
          Name
        </label>
        <div className="flex flex-row justify-center items-center w-full border-gray-primary border rounded-md pl-2">
          <IoPerson className="w-5 h-5 text-[#9282FA]" />
          <span className="w-[1px] h-5 bg-gray-primary mx-2"></span>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full h-full bg-primary text-xs text-gray-200 p-2 rounded-r-md focus:bg-gray-700"
            maxLength={14}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-start gap-1 w-full">
        <InputPhone phone={phone} setPhone={setPhone} />
      </div>

      <div className="flex flex-col justify-center items-start gap-1 w-full">
        <label htmlFor="service" className="text-xs font-bold text-gray-200">
          Description
        </label>
        <div className="flex flex-row justify-center items-center w-full border-gray-primary border rounded-md ">
          <textarea
            id="service"
            value={scheduleDescription}
            placeholder="Describe the service"
            onChange={(e) =>
              handleChange('scheduleDescription', e.target.value)
            }
            className="w-full h-20 bg-primary text-gray-200 rounded-md resize-none focus:bg-gray-700 p-3 text-xs"
            rows={3}
            maxLength={100}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-start gap-1 w-full">
        <label
          htmlFor="scheduleDate"
          className="text-xs font-bold text-gray-200"
        >
          Date
        </label>
        <DateButtonComponent onDateChange={handleDateChange} />
      </div>

      <div className="flex flex-col justify-center items-start gap-1 w-full">
        <label
          htmlFor="scheduleDate"
          className="text-xs font-bold text-gray-200"
        >
          Hour
        </label>
        <BasicTimePicker
          title={scheduleTime}
          setTime={(time) => handleChange('scheduleTime', time)}
        />
      </div>

      <footer className="flex flex-row justify-end items-center w-full">
        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-900 text-gray-200 transform transition-all duration-300 ease-in-out z-10 text-sm shadow-md shadow-purple-400/20 font-bold py-2 px-4 rounded-lg"
          title="Schedule"
        >
          Schedule
        </button>
      </footer>
    </form>
  );
}
