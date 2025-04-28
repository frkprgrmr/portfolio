import { Briefcase } from "lucide-react";
import { Projects as ProjectsData } from "@/data";
import { motion } from "motion/react";

export const MyProject = () => {
  const data = ProjectsData;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // return (
  //   <div className="space-y-6">
  //     <h2 className="text-2xl font-bold text-green-400 flex items-center gap-2">
  //       <Briefcase size={24} /> Experience
  //     </h2>
  //     <div className="space-y-6">
  //       {data.map((val) => (
  //         <div key={val.name} className="bg-gray-800 p-6 rounded-lg">
  //           <h3 className="text-xl font-bold text-white">{val.name}</h3>
  //           <div className="text-green-400 mb-2">{val.role}</div>
  //           <p className="text-gray-300">{val.description}</p>
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
        variants={itemVariants}
        className="text-2xl font-bold text-green-400 flex items-center gap-2"
      >
        <Briefcase size={24} /> Experience
      </motion.h2>
      <motion.div variants={containerVariants} className="space-y-6">
        {data.map((val, index) => (
          <motion.div
            key={val.name}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold text-white">{val.name}</h3>
            <div className="text-green-400 mb-2">{val.role}</div>
            <p className="text-gray-300">{val.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
