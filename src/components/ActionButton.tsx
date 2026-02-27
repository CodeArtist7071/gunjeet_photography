import { Link } from "react-router-dom";

const ActionButton = ({
  link,
  id,
  onClick,
  title,
}: {
  link: any | string;
  id: string | undefined | number;
  onClick?: any;
  title: string;
}) => {
  return (
    <Link
      onClick={onClick}
      key={id}
      to={link}
      className="inline-block md:mt-8 px-5 py-4 bg-transparent text-black dark:text-white  dark:border dark:border-white border border-black font-body text-sm font-normal tracking-widest uppercase cursor-pointer relative overflow-hidden transition-all duration-normal hover:text-white dark:hover:text-black before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full dark:before:bg-white before:bg-black before:transition-all before:duration-normal before:z-[-1] hover:before:left-0"
    >
      {title}
    </Link>
  );
};
export default ActionButton;
