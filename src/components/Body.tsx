import React from "react";
import MainCard from "./cards/MainCard";
import SelectInput from "./inputs/SelectInput";
import Security from "../assets/svg/security";
import VCA from "../assets/VCA.png";
import SelectRIconInput from "./inputs/SelectRIconInput";
import Textarea from "./inputs/Textarea";
import UploadFile from "./Upload/UploadFile";
import QuestionCard from "./cards/QuestionCard";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Dice from "../assets/svg/dice";
import Crono from "../assets/svg/crono";
import Verivfy from "../assets/svg/Verivfy";
import Camera from "../assets/svg/camera";
import Attemps from "../assets/svg/Attemps";
import Expected from "../assets/svg/Expected";

type Props = {};

const Body = (props: Props) => {
  return (
    <main className="w-9/12 mx-auto mb-6 -z-20">
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
      {/* settings */}
      <div className="flex mt-6 overflow-x-hidden">
        <Setting
          icon={<Dice />}
          title="Random questions"
          action={<RandomQuestionsAction />}
        />
        <Setting
          icon={<Crono />}
          title="Time per question"
          action={<TimePerQuestionAction />}
        />
        <Setting
          icon={<Verivfy />}
          title="Passing score"
          action={<PassingScoreAction />}
        />
        <Setting
          icon={<Camera />}
          title="Webcam validation"
          action={<WebcamValidationAction />}
        />
        <Setting
          icon={<Expected />}
          title="Time Expected"
          action={<TimeExpectedAction />}
        />
        <Setting
          icon={<Attemps />}
          title="Attemps"
          action={<AttempsAction />}
        />
      </div>
      {/* End Settings */}
      {/* End Areas */}
    </main>
  );
};

export default Body;

export const Setting = ({
  title,
  icon,
  action,
}: {
  title?: string;
  icon?: any;
  action?: any;
}) => {
  return (
    <MainCard className="w-44 h-40 px-[4px] py-[4px] mx-3">
      <AiOutlineInfoCircle
        size={18}
        style={{ color: "#D6D6D6", marginLeft: "auto" }}
      />
      <div className="flex items-center flex-col justify-center">
        {icon}
        <p className="text-xs font-semibold my-2">{title}</p>
      </div>
      {action}
    </MainCard>
  );
};
export const TimePerQuestionAction = () => {
  return (
    <div className="flex items-center justify-between ">
      <button
        type="button"
        className="text-white bg-gray-400 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        disabled
      >
        -
      </button>
      <div className="px-5 py-1  rounded-lg border text-blue-600 border-blue-600">
        45s
      </div>
      <button
        type="button"
        className="text-white bg-gray-400 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        disabled
      >
        +
      </button>
    </div>
  );
};
export const RandomQuestionsAction = () => {
  return (
    <div className="flex items-center justify-between ">
      <button
        type="button"
        className="text-white bg-gray-400 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        disabled
      >
        -
      </button>
      <div className="px-5 py-1  rounded-lg border text-blue-600 border-blue-600">
        10
      </div>
      <button
        type="button"
        className="text-white bg-gray-400 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        disabled
      >
        +
      </button>
    </div>
  );
};
export const PassingScoreAction = () => {
  return (
    <div className="flex items-center justify-between ">
      <button
        type="button"
        className="text-white bg-gray-400 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        disabled
      >
        -
      </button>
      <div className="px-5 py-1  rounded-lg border text-blue-600 border-blue-600">
        80%
      </div>
      <button
        type="button"
        className="text-white bg-gray-400 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        disabled
      >
        +
      </button>
    </div>
  );
};
export const WebcamValidationAction = () => {
  return (
    <div className="mx-12 mt-2">
      <label className="relative inline-flex items-center mb-4 cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
      </label>{" "}
    </div>
  );
};
export const TimeExpectedAction = () => {
  return (
    <div className="flex items-center justify-between ">
      <button
        type="button"
        className="text-white bg-gray-400 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        disabled
      >
        -
      </button>
      <div className="px-3 py-1  rounded-lg border text-blue-600 border-blue-600">
        30min
      </div>
      <button
        type="button"
        className="text-white bg-gray-400 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        disabled
      >
        +
      </button>
    </div>
  );
};
export const AttempsAction = () => {
  return (
    <div className="flex items-center justify-between ">
      <button
        type="button"
        className="text-white bg-gray-400 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        disabled
      >
        -
      </button>
      <div className="px-5 py-1  rounded-lg border text-blue-600 border-blue-600">
        3
      </div>
      <button
        type="button"
        className="text-white bg-gray-400 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        disabled
      >
        +
      </button>
    </div>
  );
};
