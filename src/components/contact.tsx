import { Contact as ContactMeData } from "@/data";
import { ExternalLink, Instagram, Linkedin, Mail } from "lucide-react";

export const ContactMe = () => {
  const data = ContactMeData;
  const instagramUserName = data.instagram.replace("@", "");
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-green-400 flex items-center gap-2">
        <Mail size={24} /> Contact
      </h2>
      <div className="space-y-4">
        <a
          href={`mailto:${data.email}`}
          className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
        >
          <Mail size={20} />
          {data.email}
        </a>
        <a
          href={`https://www.instagram.com/${instagramUserName}`}
          className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={20} />
          {data.instagram}
          <ExternalLink size={16} />
        </a>
        <a
          href={`https://${data.linkedin}`}
          className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={20} />
          linkedin.com/in/khoerul-umam
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};
