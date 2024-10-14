"use client";

import Avatar from "@/components/Avatar";
import HeartDiseaseIcon from "@/components/Icons/HeartDisease";
import MessageIcon from "@/components/Icons/MessageIcon";
import LeftMessage from "@/components/Message/LeftMessage";
import RightMessage from "@/components/Message/RightMessage";
import RightQAMessage from "@/components/Message/RightQAMessage";
import OptionsButton from "@/components/OptionsButton";
import MSG_BOT from "@/data/message";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<any>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   [1, 2, 3, 4, 5, 6, 7, 8, 10].forEach((item, index) => {
  //     setTimeout(() => {
  //       setMessage((prev: any) => [...prev, item]);
  //     }, 4000 * index); // Delay increases for each item
  //   });
  // }, []);

  useEffect(() => {
    // Scroll to the bottom when the message array changes
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div className="flex h-screen antialiased text-gray-800 bg-[#EDF2F7] ">
      <div className="flex flex-row h-full w-full md:px-16">
        <div className="flex flex-col flex-auto h-full p-9">
          <div className="flex flex-row items-center justify-center h-12 w-full">
            <div className="flex items-center justify-center rounded-2xl mb-2 text-indigo-700 bg-indigo-100 h-10 w-10">
              <MessageIcon />
            </div>
            <div className="ml-2 font-bold text-2xl">Health CareChat Bot</div>
          </div>
          <div className="flex flex-col flex-auto  flex-shrink-0 rounded-2xl h-full  rounded-2xl bg-[#F7FAFC] p-4">
            <div className="flex flex-col h-full h-full overflow-x-auto  mb-4">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                  <LeftMessage message={MSG_BOT.bot.message} AvatarName="BOT" />

                  <div className="col-start-1 col-end-13 flex justify-center gap-3">
                    <OptionsButton text=" Prediction of Heart Disease">
                      <HeartDiseaseIcon />
                    </OptionsButton>

                    <OptionsButton text=" Prediction of infectious Disease">
                      <HeartDiseaseIcon />
                    </OptionsButton>
                    <OptionsButton text=" Prediction of chronic Disease">
                      <HeartDiseaseIcon />
                    </OptionsButton>
                  </div>

                  <RightMessage
                    message="Prediction Of Heart Disease"
                    AvatarName="M"
                  />
                  <LeftMessage
                    message={"Please enter the following information:"}
                    AvatarName="BOT"
                  />
                  <RightQAMessage message={"Your age "} AvatarName="M" />
                  <LeftMessage
                    message={`
                      Please enter a valid range (1 to 4) for CP (chest pain)

                       1 - Typical angina: Classic heart-related chest pain, often due to coronary artery disease.
                       2 - Atypical angina: Chest pain that doesn’t follow the typical pattern but might still be heart-related.
                       3 - Non-anginal pain: Pain in the chest that is not caused by the heart (e.g., musculoskeletal or gastrointestinal issues).
                       4 - Asymptomatic: No chest pain or symptoms, even in the presence of heart disease.
                      `}
                    AvatarName="BOT"
                  />

                  <RightQAMessage
                    message={"Your CP Level "}
                    value="4"
                    AvatarName="M"
                  />

                  <LeftMessage
                    message={`
                      Trestbps: Resting blood pressure measured in millimeters of mercury (mm Hg) 
                      `}
                    AvatarName="BOT"
                  />
                  <RightQAMessage
                    message={"Your Trestbps"}
                    value="95"
                    AvatarName="M"
                  />

                  <LeftMessage
                    message={`
                       Cholesterol in mg/dL
                      `}
                    AvatarName="BOT"
                  />
                  <RightQAMessage
                    message={"Your Cholesterol"}
                    value="173"
                    AvatarName="M"
                  />

                  <LeftMessage
                    message={`
                       ❤️ Your results indicate that you do not have heart disease. However, it's wise to remain vigilant about your heart health.
                       
                       🫀 Please note that the accuracy of this assessment is 72%. 📊
                      `}
                    AvatarName="BOT"
                  />
                  <div ref={messagesEndRef} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
