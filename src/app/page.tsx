"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Terminal } from "lucide-react";
import { cn } from "@/utils/helpers";
import { AboutMe } from "@/components/about";
import { ContactMe } from "@/components/contact";
import { MyProject } from "@/components/projects";
import { MySkills } from "@/components/skills";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [currentCommand, setCurrentCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [activeContent, setActiveContent] = useState<string | undefined>();
  const [isMobile, setIsMobile] = useState(false);

  const [mobileView, setMobileView] = useState<"terminal" | "content">(
    "terminal"
  );

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (trimmedCmd === "clear") {
      setCommandHistory([]);
      return;
    }

    const contentCommands = ["about", "skills", "projects", "contact"];
    const allCommands = [...contentCommands, "help", "clear"];

    if (contentCommands.includes(trimmedCmd)) {
      setActiveContent(trimmedCmd);
      if (isMobile) {
        setMobileView("content");
      }
    }

    const response =
      trimmedCmd === "help"
        ? "Available commands: about, skills, projects, contact, clear"
        : !allCommands.includes(trimmedCmd)
        ? `Command not recognized. type 'help' to see the available commands`
        : `Displaying ${trimmedCmd} content...`;

    setCommandHistory((prev) => [
      ...prev,
      `umam@portfolio:~$ ${cmd}`,
      response,
    ]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(currentCommand);
      setCurrentCommand("");
      if (currentCommand === "clear") {
        setActiveContent(undefined);
      }
    }
  };

  const ContentView = () => {
    switch (activeContent) {
      case "about":
        return <AboutMe />;

      case "skills":
        return <MySkills />;

      case "projects":
        return <MyProject />;

      case "contact":
        return <ContactMe />;

      default:
        return (
          <p className="text-gray-300">
            &quot;AI won&apos;t replace humans, but humans using AI will.&quot;
            - Fei-Fei Li
          </p>
        );
    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  // Check if the screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const shouldShowContent = isMobile
    ? activeContent && mobileView === "content"
    : activeContent;

  return (
    <main className="bg-gray-800 py-6 md:py-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-0 text-gray-300 font-mono h-full">
        {/* Mobile view switcher - only show when there's content to display */}
        {isMobile && activeContent && (
          <div className="flex mb-4 border border-emerald-400/20 rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileView("terminal")}
              className={cn(
                "flex-1 py-2 text-center transition-colors",
                mobileView === "terminal"
                  ? "bg-gray-700 text-green-400"
                  : "bg-gray-900 text-gray-400"
              )}
            >
              Terminal
            </button>
            <button
              type="button"
              onClick={() => setMobileView("content")}
              className={cn(
                "flex-1 py-2 text-center transition-colors",
                mobileView === "content"
                  ? "bg-gray-700 text-green-400"
                  : "bg-gray-900 text-gray-400"
              )}
            >
              Content
            </button>
          </div>
        )}

        <div
          className={cn(
            "h-full",
            isMobile ? "flex flex-col" : "flex flex-row gap-24 justify-center"
          )}
        >
          {/* Terminal Side */}
          <div
            className={cn(
              "flex flex-col",
              isMobile
                ? cn("w-full", mobileView === "content" ? "hidden" : "block")
                : "w-1/2 h-[calc(66.6667%+50px)]"
            )}
          >
            <div className="bg-[#8FE3CF] rounded-t-lg p-2 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center text-sm text-[#2B4865]">
                <Terminal className="inline-block mr-2" size={16} />
                portfolio.terminal
              </div>
            </div>
            <div
              className={cn(
                "bg-gray-900 p-4 rounded-b-lg overflow-auto shadow-2xl border border-emerald-400/20 custom-scrollbar",
                isMobile ? "h-72" : "flex-1"
              )}
            >
              <div className="mb-4">
                <p className="text-yellow-400">
                  Welcome to my portfolio terminal!
                </p>
                <p>Type &apos;help&apos; to see available commands.</p>
              </div>

              {commandHistory.map((item, index) => (
                <div key={index} className="mb-2">
                  <p>{item}</p>
                </div>
              ))}

              <div className="flex">
                <span className="text-[#82DBD8]">umam@portfolio:~$&nbsp;</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={currentCommand}
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  onBlur={handleBlur}
                  onKeyPress={handleKeyPress}
                  className="flex-1 bg-transparent outline-none border-none text-green-400"
                />
              </div>
            </div>

            <div className="mt-4 mb-6">
              <button
                type="button"
                onClick={() => {
                  const fileUrl =
                    "https://docs.google.com/document/d/1yw4IqX84IjhRyYVDw85nxZ7EAlLRN-dU/export?format=docx";
                  return window.open(fileUrl, "_blank");
                }}
                className={cn(
                  "bg-gray-900 hover:bg-gray-700 text-green-400 hover:text-green-300 font-mono px-4 py-2 border border-emerald-400/20 hover:border-green-400 rounded transition-all duration-200 shadow-md flex items-center space-x-2",
                  isMobile && "w-full justify-center"
                )}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Download Icon</title>
                  <path
                    d="M12 16L12 8M12 16L9 13M12 16L15 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 15V16C3 18.2091 4.79086 20 7 20H17C19.2091 20 21 18.2091 21 16V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Download CV</span>
              </button>
            </div>
          </div>

          {/* Content Side - Only render if it should be shown */}
          {shouldShowContent && (
            <div
              className={cn(
                "bg-gray-900 rounded-lg shadow-2xl border border-emerald-400/20 overflow-auto custom-scrollbar",
                isMobile ? "w-full p-4" : "relative p-6 w-1/2 h-full"
              )}
            >
              <ContentView />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
