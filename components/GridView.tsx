import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/PopOver";
import Modal from "./Modal"; // Import the Modal component

const GridView = ({ data }: any) => {
  const [selectedStudent, setSelectedStudent] = useState<any>(null); // State for selected student
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleViewDetails = (student: any) => {
    setSelectedStudent(student); // Set the selected student
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedStudent(null); // Clear the selected student
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.map((student: any) => (
          <div key={student.id} className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer border border-gray-300">
            <div className="flex items-center justify-between border-b border-gray-300 pb-2">
              <div className="flex items-center gap-4 ">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{student.name.charAt(0).toUpperCase()}</span>
                </div>
                <h3 className="font-bold text-lg text-primary">{student.name}</h3>
              </div>
              <div className="flex items-center gap-4 ">
                <Popover>
                  <PopoverTrigger>
                    <button className="hover:bg-gray-300 rounded-md p-2">
                      <Icon
                        icon="bi:three-dots-vertical"
                        style={{ fontSize: "20px" }}
                      />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <p className="p-2 border-b border-gray-300 text-[15px] font-medium text-primary">
                      Options
                    </p>
                    <div className="flex flex-col space-y-1 p-1">
                      <button
                        className="flex items-center justify-between space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-green-600 rounded-md transition-colors duration-200 font-medium"
                      >
                        <span>Edit</span>
                        <Icon icon="octicon:pencil-24" className="text-lg" />
                      </button>
                      <button
                        className="flex items-center justify-between space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-red-100 hover:text-red-600 rounded-md transition-colors duration-200 font-medium"
                      >
                        <span>Delete</span>
                        <Icon
                          icon="ant-design:delete-outlined"
                          className="text-lg"
                        />
                      </button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="pt-2 space-y-1">
              <p className="text-primary font-medium">Email:<span className="text-gray-600 pl-2">{student.email}</span></p>
              <p className="text-primary font-medium">Phone:<span className="text-gray-600 pl-2">{student.phone}</span></p>
              <p className="text-primary font-medium">City: <span className="text-gray-600 pl-2">{student.address.city}</span></p>
              <p className="text-primary font-medium">Company:<span className="text-gray-600 pl-2">{student.company.name}</span></p>
              <div className="mt-4 flex justify-between items-center">
                <button
                  className="bg-primary text-white px-2 py-1 rounded hover:bg-primary-dark transition mt-2"
                  onClick={() => handleViewDetails(student)} // Open modal on click
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Render the Modal if it is open */}
      {isModalOpen && (
        <Modal student={selectedStudent} onClose={closeModal} />
      )}
    </>
  );
};

export default GridView;
