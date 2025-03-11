import { Briefcase } from "lucide-react";
import { Projects as ProjectsData } from "@/data";

export const MyProject = () => {
  const data = ProjectsData;
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-green-400 flex items-center gap-2">
        <Briefcase size={24} /> Experience
      </h2>
      <div className="space-y-6">
        {data.map((val) => (
          <div key={val.name} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white">{val.name}</h3>
            <div className="text-green-400 mb-2">{val.role}</div>
            <p className="text-gray-300">{val.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
