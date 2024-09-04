"use client";
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

interface Props {}

const Page: React.FC<Props> = ({}) => {
  const [input, setInput] = useState<string>();
  const [line, setLine] = useState(false);
  const [todoArray, setTodoArr] = useState<string[]>([""]);
  const [current, setCurrent] = useState<number | undefined>();
  const arr: string[] = [];

  return (
    <div className=" bg-white text-black h-screen">
      <div className="flex gap-4 justify-center items-center w-auto">
        <input
          className="border-blue-600 border"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="자신이 할 일을 적어보세요!"
        />
        <button
          className="mr-6 block border w-16"
          onClick={() => {
            if (input) setTodoArr([input, ...todoArray]);
            setInput("");
          }}
        >
          register
        </button>
      </div>
      <div className="mt-8 justify-center w-auto">
        {todoArray.map((item, index) => (
          <div key={index} className={`mt-2 w-72 mx-auto border flex relative`}>
            <div
              className={`w-[290px] pl-1 ${line && "line-through"}`}
              onClick={() => setLine(!line)}
            >
              {item}
            </div>
            <div className={`${!item && "hidden"}`}>
              <FaTrashAlt
                className="mx-[235px] my-1 absolute right-[64px]"
                onClick={() => {
                  setCurrent(index);
                  todoArray.map((itme, index) => {
                    if (index !== current) arr.push(itme);
                  });
                  setTodoArr(arr);
                  console.log(current);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
