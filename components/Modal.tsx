// Modal.tsx
import React from 'react';

const Modal = ({ student, onClose }: { student: any; onClose: () => void }) => {
  if (!student) return null; // Do not render if no student is selected

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="font-bold text-lg text-primary mb-4">{student.name}</h2>
        <p><strong>Username:</strong> {student.username}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
        <p><strong>Website:</strong> <a href={`http://${student.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600">{student.website}</a></p>
        <p><strong>Company:</strong> {student.company.name}</p>
        <p><strong>Catchphrase:</strong> {student.company.catchPhrase}</p>
        <p><strong>Business:</strong> {student.company.bs}</p>
        
        <h3 className="mt-4 font-semibold">Geo Location:</h3>
        <p><strong>Latitude:</strong> {student.address.geo.lat}</p>
        <p><strong>Longitude:</strong> {student.address.geo.lng}</p>
        <div className="mt-4">
          <button
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
            onClick={onClose}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
