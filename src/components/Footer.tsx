import { CopyrightIcon } from "hugeicons-react";
const Footer = () => {
  return (
    <div className="mt-auto flex justify-end items-center font-montserratRegular gap-2 mb-2 text-gray-600 px-4 text-sm">
      <CopyrightIcon size={14} />
      <span>copyright:</span>
      <a
        href="https://www.mathinenglish.com"
        target="_blank"
        className="hover:text-blue-600 hover:underline"
      >
        www.mathinenglish.com
      </a>
    </div>
  );
};

export default Footer;
