import React, { useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
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
import "../utils/scrollbar.css";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

type Props = {};

type CardType = {
  title?: string;
  icon?: any;
  action?: any;
};

type QuestionListType = {
  id: number;
};

export const Setting = ({ title, icon, action }: CardType) => {
  return (
    <MainCard className="w-44 h-40 px-[4px] py-[4px] snap-start ">
      <a href="#" id="my-anchor-element" className=" float-right">
        <AiOutlineInfoCircle size={18} style={{ color: "#D6D6D6" }} />
        <Tooltip
          variant="light"
          className="p-1 w-36 rounded-md text-gray-700 drop-shadow-sm text-xs"
          anchorSelect="#my-anchor-element"
          content="When the countdown isfinished, the system willautomatically move to thenext question."
        />
      </a>
      <div className="flex items-center flex-col justify-center mt-5">
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

const CardList: CardType[] = [
  { icon: Dice, title: "Random questions", action: RandomQuestionsAction },
  { icon: Dice, title: "Random questions", action: RandomQuestionsAction },
  { icon: Dice, title: "Random questions", action: RandomQuestionsAction },
  { icon: Dice, title: "Random questions", action: RandomQuestionsAction },
  { icon: Crono, title: "Time per question", action: TimePerQuestionAction },
  { icon: Verivfy, title: "Passing score", action: PassingScoreAction },
  { icon: Camera, title: "Webcam validation", action: WebcamValidationAction },
  { icon: Expected, title: "Time Expected", action: TimeExpectedAction },
  { icon: Attemps, title: "Attemps", action: AttempsAction },
];
const Body = (props: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [Questions, setQuestions] = useState<QuestionListType[]>([]);
  const [nextId, setNextId] = useState(1);

  const handleAddQuestion = () => {
    const newQuestion: QuestionListType = {
      id: nextId,
    };
    setQuestions([...Questions, newQuestion]);
    setNextId(nextId + 1);
  };

  const handleRemoveQuestion = (id: number) => {
    const newQuestions = Questions.filter((Question) => Question.id !== id);
    setQuestions(newQuestions);
  };

  // handleNextClick Slider
  const handleNextClick = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: container.scrollLeft + container.clientWidth,
        behavior: "smooth",
      });
    }
  };
  // Handel Back Slider
  const handleBackClick = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: container.scrollLeft - container.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="w-9/12 mx-auto mb-6 -z-20">
      {/* top */}
      <div className="flex justify-between items-center mt-3 mb-2 ">
        <h6 className="font-semibold text-lg">
          Edit Training ???Working At Height???
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
          <UploadFile className="h-52 w-full" />
          <p className="text-xs text-gray-400">
            *Only JPG, PNG files are allowed. Image must be less than 2 MB
          </p>
        </MainCard>
        {/* Training file */}
        <MainCard className="h-80 w-56 flex flex-col justify-between">
          <div className="flex flex-col gap-2 ">
            <p className="text-gray-400">Training file</p>
            <UploadFile className="h-28 w-full" />
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
          Here you can manage the questions by clicking on the ???Add Question???
          button and choose from the available types of question. You can add up
          to 100 questions.
        </p>
        <div className="w-full h-[1px] bg-gray-400" />

        {Questions.map((q) => (
          <QuestionCard
            index={q.id}
            key={q.id}
            remove={() => handleRemoveQuestion(q.id)}
          />
        ))}
        {/* <QuestionCard index={1} />
        <QuestionCard index={2} /> */}

        {/* Add Question + */}
        <button
          onClick={handleAddQuestion}
          type="button"
          className=" bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none text-blue-700 "
        >
          Add Question +
        </button>
      </MainCard>
      {/* End Training quiz */}

      {/* ************** */}
      {/* settings */}
      <div className="w-full relative">
        <div
          className="flex relative mt-6 overflow-x-scroll gap-6 snap-x snap-mandatory  sb py-3 "
          ref={containerRef}
        >
          {CardList.map((card, i) => (
            <Setting
              key={i}
              action={<card.action />}
              icon={<card.icon />}
              title={card.title}
            />
          ))}
        </div>
        <button
          className="absolute -left-12 top-20 bg-white py-1 px-1 rounded-sm"
          onClick={handleBackClick}
        >
          <MdOutlineKeyboardArrowLeft size={28} style={{ color: "#B6B6B6" }} />
        </button>
        <button
          className="absolute -right-12 top-20 bg-white py-1 px-1 rounded-sm"
          onClick={handleNextClick}
        >
          <MdOutlineKeyboardArrowRight size={28} style={{ color: "#B6B6B6" }} />
        </button>
      </div>
      {/* End Settings */}
      {/* End Areas */}
    </main>
  );
};

export default Body;
