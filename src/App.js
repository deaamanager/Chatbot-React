import React, { useState } from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";

import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import LivePortal from "./components/LivePortal";
import WorkContainer from "./components/WorkContainer";
import HomePage from "./components/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#EF6C00",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#EF6C00",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a"
};

export default function App() {
  const [avtar, setAvtar] = useState(false);
  console.log("chatbot Now :", avtar);
  return (
    <div className="realtive  h-screen w-full bg-gray-900">
      <div className="absolute bottom-0 right-0 ">
        <button
          onClick={() => setAvtar(!avtar)}
          className="animate-pulse text-gray-200 mb-6 mr-2 p-5"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1698/1698535.png"
            alt="avater-logo"
            className={`h-16 object-cover  ${avtar ? "hidden" : "block"}`}
          />
          <span className={`  `}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-red-500 "
            >
              <path
                fillRule="evenodd"
                d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        {avtar && (
          <ThemeProvider theme={theme}>
            <ChatBot
              className="mr-4 "
              botAvatar="https://cdn-icons-png.flaticon.com/512/1698/1698535.png"
              //headerTitle="Speech Recognition"
              recognitionEnable={true}
              steps={[
                {
                  id: "1",
                  message: "Hello Dear, How can I help you ?",
                  trigger: "2"
                },
                {
                  id: "2",
                  user: true,
                  trigger: "3"
                },
                {
                  id: "3",
                  trigger: "4",
                  message: "sure, {previousValue}, Contact me on LinkedIn"
                },
                {
                  id: "4",
                  user: true,
                  trigger: "4"
                }
              ]}
            />
          </ThemeProvider>
        )}
      </div>
    </div>
  );
}
