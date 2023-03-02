import React from "react";
import MainCard from "./cards/MainCard";
import SelectInput from "./inputs/SelectInput";
import Security from "../assets/svg/security";
import VCA from "../assets/VCA.png";
import SelectRIconInput from "./inputs/SelectRIconInput";
import Textarea from "./inputs/Textarea";
import UploadFile from "./Upload/UploadFile";
import QuestionCard from "./cards/QuestionCard";

type Props = {};

const Body = (props: Props) => {
  return (
    <main className="w-9/12 mx-auto -z-20">
      {/* top */}
      <div className="flex justify-between items-center mt-3 mb-2 ">
        <h6 className="font-semibold text-lg">
          Edit Training “Working At Height”
        </h6>
        <div>
          <button className="font-bold text-gray-400 mr-6">cancel</button>
          <button
            type="button"
            className="focus:outline-none text-white bg-orange-500 font-bold hover:bg-orange-600 focus:ring-4 focus:ring-orange-300  rounded-md text-sm px-5 py-2.5 mr-2 mb-2 "
          >
            Update & Save
          </button>
        </div>
      </div>

      {/* areas */}
      {/* Top Areas */}
      <div className="flex justify-between">
        {/* basicInfo Card */}
        <MainCard className="w-[532px] h-80 flex flex-col gap-2">
          {/* Top */}
          <div className="flex justify-between">
            <SelectInput
              title="Safety"
              Icon={<Security />}
              label="Category"
              className="w-40 text-xs"
              addOption={true}
            />
            <SelectInput
              title="VCA"
              Icon={<img alt="VCA" src={VCA} width="18" height="18" />}
              label="Topic"
              addOption={true}
              className="w-44 text-xs"
            />
            <SelectInput title="1 year" label="Valid For" className="text-xs" />
          </div>
          {/* Center */}
          <div className="flex justify-between ">
            <SelectRIconInput
              title="Working at height"
              Icon={<img alt="VCA" src={VCA} width="18" height="18" />}
              label="Training"
              className="w-72 text-xs"
            />

            <SelectInput
              title="Internal workers"
              label="Assign To"
              className="w-40 text-xs"
            />
          </div>
          {/* Bottom */}
          <div className="flex justify-between ">
            {/* Left */}
            <div className="flex flex-col gap-2">
              <SelectInput
                placeholder="Select departments"
                label="Departments"
                className="w-[166px] text-xs"
                optionFlag={true}
              />

              <SelectInput
                placeholder="Select functions"
                label="Functions"
                className="w-[166px] text-xs"
                optionFlag={true}
              />
            </div>
            {/* Right */}
            <Textarea />
          </div>
        </MainCard>
        {/* Image Card  */}
        <MainCard className="h-80 w-80 flex flex-col justify-between">
          <p className="text-gray-400">Image</p>
          <UploadFile />
          <p className="text-xs text-gray-400">
            *Only JPG, PNG files are allowed. Image must be less than 2 MB
          </p>
        </MainCard>
        {/* Training file */}
        <MainCard className="h-80 w-56 flex flex-col justify-between">
          <div className=" ">
            <p className="text-gray-400">Training file</p>
            <UploadFile height="h-28" />
            <p className="text-xs  text-gray-400">
              *Only Video, PDF and SlideShow files are allowed.
            </p>
          </div>
          <div className="flex items-center justify-between gap-1">
            <div className="w-full bg-gray-400 h-[1px]" />
            <p className="text-xs text-gray-500">OR</p>
            <div className="w-full bg-gray-400 h-[1px]" />
          </div>
          <p className="text-sm font-semibold text-gray-700 ">Media URL</p>
          <input
            type="text"
            id="first_name"
            className="bg-white border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-xs "
            placeholder="https://youtu.be/1g4hoZx8-o4"
            required
          />
        </MainCard>
      </div>
      {/* End Top Areas */}

      {/* Training quiz */}
      <MainCard className="w-full mt-6  flex flex-col gap-2">
        {/* Top */}
        <h6 className="text-sm text-gray-700 font-semibold">Training quiz</h6>
        <p className="text-xs text-gray-400">
          Here you can manage the questions by clicking on the “Add Question”
          button and choose from the available types of question. You can add up
          to 100 questions.
        </p>
        <div className="w-full h-[1px] bg-gray-400" />
        <QuestionCard index={1} />
        <QuestionCard index={2} />

        {/* Add Question + */}
        <button
          type="button"
          className=" bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none text-blue-700 "
        >
          Add Question +
        </button>
      </MainCard>
      {/* End Training quiz */}
      {/* End Areas */}
    </main>
  );
};

export default Body;
