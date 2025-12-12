import React from 'react';
import { FaInbox, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

interface SocialIconProps {
  href: string;
  Icon: React.ElementType;
  label: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    // Apply Tailwind CSS classes for styling, hover effects, and size
    className="text-txtcolor hover:text-slate-500 transition duration-300 mx-2"
    aria-label={label}
  >
    <Icon className="h-10 w-10" /> {/* Set the icon size */}
  </a>
);

const SocialIcons: React.FC = () => {
  return (
    <div className="flex justify-center mt-4 gap-4">
      <SocialIcon
        href="mailto:leahkerry@gmail.com"
        Icon={FaInbox}
        label="Email"
      />
      <SocialIcon
        href="https://github.com/leahkerry"
        Icon={FaGithub}
        label="GitHub profile"
      />
      <SocialIcon
        href="https://www.linkedin.com/in/leah-kerry-993997101/"
        Icon={FaLinkedin}
        label="LinkedIn profile"
      />
      <SocialIcon
        href="https://www.youtube.com/@linfinity9127"
        Icon={FaYoutube}
        label="YouTube profile"
      />
    </div>
  );
};

export default SocialIcons;
