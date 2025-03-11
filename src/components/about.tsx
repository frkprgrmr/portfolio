import { AboutMe as AboutMeData } from "@/data";
import { User } from "lucide-react";

export const AboutMe = () => {
  const data = AboutMeData;
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-green-400 flex items-center gap-2">
        <User size={24} /> About Me
      </h2>
      <div className="relative">
        <div className="float-right ml-4 w-36">
          <img src="./umam.jpg" alt="Khoerul Umam" className="w-full" />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">{data.name}</h1>
          <h3 className="text-xl text-green-400">{data.role}</h3>
          <p className="text-gray-300 whitespace-pre-line">{data.bio}</p>
          <p className="text-gray-300">
            Type `<span className="text-yellow-400">skills</span>` to see the
            technologies he works with. <br /> Type `
            <span className="text-yellow-400">projects</span>` to explore his
            work.
          </p>
        </div>
      </div>
    </div>
  );
};
