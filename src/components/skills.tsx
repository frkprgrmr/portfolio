import { Skills } from "@/data";
import { Code } from "lucide-react";
import { motion } from "motion/react";

export const MySkills = () => {
  const data = Skills;
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  // return (
  //   <div className="space-y-6">
  //     <h2 className="text-2xl font-bold text-green-400 flex items-center gap-2">
  //       <Code size={24} /> Skills
  //     </h2>
  //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  //       {data.map((skillSet) => (
  //         <div key={skillSet.category} className="bg-gray-800 p-4 rounded-lg">
  //           <h3 className="text-xl font-bold text-green-400 mb-4">
  //             {skillSet.category}
  //           </h3>
  //           <div className="flex flex-wrap gap-2">
  //             {skillSet.items.map((skill) => (
  //               <span
  //                 key={skill}
  //                 className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
  //               >
  //                 {skill}
  //               </span>
  //             ))}
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <motion.h2
        variants={cardVariants}
        className="text-2xl font-bold text-green-400 flex items-center gap-2"
      >
        <Code size={24} /> Skills
      </motion.h2>
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {data.map((skillSet, catIndex) => (
          <motion.div
            key={skillSet.category}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-gray-800 p-4 rounded-lg"
          >
            <h3 className="text-xl font-bold text-green-400 mb-4">
              {skillSet.category}
            </h3>
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-2"
            >
              {skillSet.items.map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={skillVariants}
                  whileHover={{ scale: 1.1, backgroundColor: "#4ade80" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full hover:text-gray-900"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
