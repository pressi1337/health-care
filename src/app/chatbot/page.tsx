"use client";

import Avatar from "@/components/Avatar";
import HeartDiseaseIcon from "@/components/Icons/HeartDisease";
import MessageIcon from "@/components/Icons/MessageIcon";
import LeftMessage from "@/components/Message/LeftMessage";
import RightMessage from "@/components/Message/RightMessage";
import RightQAMessage from "@/components/Message/RightQAMessage";
import OptionsButton from "@/components/OptionsButton";
import MSG_BOT from "@/data/message";
import { useEffect, useRef } from "react";
import useChat from "./useChat";

export default function ChatBot() {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { message, ChatAlg, setInitial, setMessage } = useChat();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  console.log({ message });
  return (
    <div className="flex h-screen antialiased text-gray-800 bg-[#EDF2F7] ">
      <div className="flex flex-row h-full w-full md:px-16">
        <div className="flex flex-col flex-auto h-full p-9">
          <div className="flex flex-row items-center justify-center h-12 w-full">
            <div className="flex items-center justify-center rounded-2xl mb-2 text-indigo-700 bg-indigo-100 h-10 w-10">
              <MessageIcon />
            </div>
            <div className="ml-2 font-bold text-2xl">Health CareChat</div>
          </div>
          {/*start block  */}
          <div className="relative flex flex-col flex-auto  flex-shrink-0 rounded-2xl h-full  rounded-2xl bg-[#F7FAFC] p-4">
            {/* Background Emoji with Blur */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 text-[150px] pointer-events-none">
              🩺
            </div>
            <div className="flex flex-col h-full h-full overflow-x-auto  mb-4">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                  <LeftMessage message={MSG_BOT.bot.message} AvatarName="BOT" />

                  <div className="col-start-1 col-end-13 flex justify-center gap-3">
                    <button
                      disabled={message.length}
                      onClick={() => ChatAlg("infection_disease_1")}
                    >
                      <OptionsButton text=" Prediction of infectious Disease">
                        🦠
                      </OptionsButton>
                    </button>
                    <button
                      disabled={message.length}
                      onClick={() => ChatAlg("chronic_disease_1")}
                    >
                      <OptionsButton text=" Prediction of chronic Disease">
                        <HeartDiseaseIcon />
                      </OptionsButton>
                    </button>
                    <button
                      disabled={message.length}
                      onClick={() => ChatAlg("heart_disease_1")}
                    >
                      <OptionsButton text=" Prediction of Heart Disease">
                        🫀
                      </OptionsButton>
                    </button>
                  </div>

                  {message.map((element: any) =>
                    element?.placement == "left" ? (
                      <LeftMessage
                        message={element.message.text}
                        AvatarName="BOT"
                        loading={element?.message?.loading ?? false}
                        output={element?.message?.output ?? false}
                        Remedies={element?.message?.Remedies ?? []}
                        foods={element?.message?.foods ?? []}
                        doctors={element?.message?.doctors ?? []}
                        onContinue={() => {
                          setMessage([]);
                          setInitial(true);
                        }}
                      />
                    ) : element?.placement == "rightQA" ? (
                      <RightQAMessage
                        message={element.message.text}
                        AvatarName="M"
                        code={element.message.key}
                        onClick={ChatAlg}
                        submitted={element.message.submited}
                        name={element.message.name}
                        prediction={element.message.prediction}
                        inputType={element.message.inputType ?? "text"}
                        options={element.message.options ?? []}
                        validator={element.message.validator}
                      />
                    ) : (
                      <RightMessage
                        message={element.message.text}
                        AvatarName="M"
                      />
                    )
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </div>
            </div>
          </div>
          {/*end block  */}
        </div>
      </div>
    </div>
  );
}
