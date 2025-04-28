import { AboutMe as AboutMeData } from "@/data";
import { User } from "lucide-react";
import { motion } from "motion/react";

export const AboutMe = () => {
  const data = AboutMeData;
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
    show: { opacity: 1, y: 0 },
  };

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
        <User size={24} /> About Me
      </motion.h2>
      <div className="relative">
        <motion.div variants={itemVariants} className="float-right ml-4 w-36">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            src="./umam.jpg"
            alt="Khoerul Umam"
            className="w-full rounded-md"
          />
        </motion.div>
        <div className="space-y-4">
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold text-white"
          >
            {data.name}
          </motion.h1>
          <motion.h3 variants={itemVariants} className="text-xl text-green-400">
            {data.role}
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 whitespace-pre-line"
          >
            {data.bio}
          </motion.p>
          <motion.p variants={itemVariants} className="text-gray-300">
            Type `<span className="text-yellow-400">skills</span>` to see the
            technologies he works with. <br /> Type `
            <span className="text-yellow-400">projects</span>` to explore his
            work.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};
