import { Icon } from "@iconify/react/dist/iconify.js";

const HorizontalMenu = () => {
  return (
    <nav className="bg-white text-primary p-4 px-10 border-b border-gray-300">
      <div className="container mx-auto flex items-center justify-between">
      <div className="flex items-center text-xl font-semibold">
          <p>Sample</p>
        </div>
       
        <ul className="flex space-x-8 text-md font-semibold">
          <li className="hover:opacity-100 opacity-95 transition-opacity cursor-pointer">Home</li>
          <li className="hover:opacity-100 opacity-95 transition-opacity cursor-pointer">About</li>
          <li className="hover:opacity-100 opacity-95 transition-opacity cursor-pointer">Services</li>
          <li className="hover:opacity-100 opacity-95 transition-opacity cursor-pointer">Contact</li>
          <li className="hover:opacity-100 opacity-95 transition-opacity cursor-pointer">Blogs</li>
        </ul>
        <button className="text-md flex bg-primary text-white py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 items-center">
          <Icon icon="ic:round-play-circle" className="inline-block mr-2" />
          Get Started
        </button>

      </div>
    </nav>
  );
};

export default HorizontalMenu;
