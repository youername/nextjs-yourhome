"use client";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [message, setMessage] = useState("");
  const [addtext, setAddtext] = useState("");
  const [addsign, setAddsign] = useState("");
  const [isMenuShow, setIsMenuShow] = useState(false);

  return (
    <div className="h-screen bg-white text-black relative">
      <div className="flex">
        <div className="bg-gray-800 h-24 pl-48 w-full text-black">
          <div className="flex gap-2">
            <div className="text-green-300">my</div>{" "}
            <input
              type="text"
              value={photoUrl}
              className="border-2"
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <div className="font-extrabold text-5xl text-white">Todo</div>
            <div
              className={`rounded-full border bg-white absolute left-80 ${
                !photoUrl && "hidden"
              }`}
              style={{
                width: "50px",
                height: "50px",
                backgroundImage: `url(${photoUrl})`,
                backgroundSize: "contain",
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex w-96 mx-auto pt-6">
        <input
          type="text"
          value={addtext}
          className="border-[0.5px] h-12 w-72 bg-gray-200 border-gray-600 rounded text-2xl"
          onChange={(e) => setAddtext(e.target.value)}
        />
        <button
          className="w-36 h-18 border-10 border-black bg-red-500 font-bold text-xl rounded"
          onClick={(e) => addsign(value)}
        >
          add
        </button>
      </div>
      <div className="border w-16 h-8">{`${addtext}`}</div>
    </div>
  );
}
