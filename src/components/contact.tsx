import { Contact as ContactMeData } from "@/data";
import { ExternalLink, Instagram, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

export const ContactMe = () => {
  const data = ContactMeData;
  const instagramUserName = data.instagram.replace("@", "");

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

  // return (
  //   <div className="space-y-6">
  //     <h2 className="text-2xl font-bold text-green-400 flex items-center gap-2">
  //       <Mail size={24} /> Contact
  //     </h2>
  //     <div className="space-y-4">
  //       <a
  //         href={`mailto:${data.email}`}
  //         className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
  //       >
  //         <Mail size={20} />
  //         {data.email}
  //       </a>
  //       <a
  //         href={`https://www.instagram.com/${instagramUserName}`}
  //         className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Instagram size={20} />
  //         {data.instagram}
  //         <ExternalLink size={16} />
  //       </a>
  //       <a
  //         href={`https://${data.linkedin}`}
  //         className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Linkedin size={20} />
  //         linkedin.com/in/khoerul-umam
  //         <ExternalLink size={16} />
  //       </a>
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
        <Mail size={24} /> Contact
      </motion.h2>
      <motion.div variants={containerVariants} className="space-y-4">
        <motion.a
          variants={itemVariants}
          whileHover={{ x: 5 }}
          href={`mailto:${data.email}`}
          className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
        >
          <Mail size={20} />
          {data.email}
        </motion.a>
        <motion.a
          variants={itemVariants}
          whileHover={{ x: 5 }}
          href={`https://www.instagram.com/${instagramUserName}`}
          className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={20} />
          {data.instagram}
          <ExternalLink size={16} />
        </motion.a>
        <motion.a
          variants={itemVariants}
          whileHover={{ x: 5 }}
          href={`https://${data.linkedin}`}
          className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={20} />
          linkedin.com/in/khoerul-umam
          <ExternalLink size={16} />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};
