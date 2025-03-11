import { Skills } from "@/data";
import { Code } from "lucide-react";

export const MySkills = () => {
  const data = Skills;
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-green-400 flex items-center gap-2">
        <Code size={24} /> Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((skillSet) => (
          <div key={skillSet.category} className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-green-400 mb-4">
              {skillSet.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillSet.items.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
