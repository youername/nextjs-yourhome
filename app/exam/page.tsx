"use client";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

interface Props {}

const Page: React.FC<Props> = ({}) => {
  const [input, setInput] = useState<string>();
  const [todoArray, setTodoArr] = useState<string[]>([""]);
  const [current, setCurrent] = useState();
  const array = [];

  return (
    <div className=" bg-white text-black h-screen">
      <div className="flex gap-4 justify-center items-center w-auto">
        <input
          className="border-blue-600 border"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
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
        {todoArray.map((item, index: number) => (
          <div key={index} className={`mt-2 w-72 mx-auto border flex`}></div>
        ))}
      </div>
    </div>
  );
};

export default Page;
