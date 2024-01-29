import React, { useState } from "react";
import EditAnnouncement from './EditAnnouncement';
import { useNavigate } from "react-router-dom";

const Announcement = () => {
  const [showeditAnnouncement, setShoweditAnnouncement] = useState(false);
  const [showAnnouncementButton, setShowAnnouncementButton] = useState(true);
  // const navigate = useNavigate();

  const handleOptions = (component) => {
    if (component === "EditAnnouncement") {
      setShoweditAnnouncement(true);
      setShowAnnouncementButton(false); // Set the state to hide the "Announcements" button
    }
  };

  return (
    <section className='left-85 top-5 absolute'>
      {showeditAnnouncement && <EditAnnouncement/>}
      <div className='absolute flex left-5 top-5 w-auto '>
        {showAnnouncementButton && (
          <button className='bg-sky-500 rounded-md  w-auto'>Announcements</button>
        )}
      </div>

      <div className='border-2 h-auto rounded-md border-black flex justify-center items-center mt-20 m-10 -mb-10'>
        <div className="p-10">
          <div className='overflow-hidden block'>
            <div className="flex w-80vw h-60vh mb-4 border-3 rounded-tl-3xl rounded-tr-3xl overflow-auto  border-sky-500 rounded-xl">
            <table className="w-full h-10 text-center rounded-md border-collapse">
      <thead>
        <tr>
          <th className="border bg-blue-950  text-white px-4 py-2">SL No</th>

          <th className="border col-span-3 bg-blue-950 text-white px-4 py-2">
         Events
          </th>
        
          <th className="border bg-blue-950 text-white px-4 py-2">Edit</th>
          <th className="border bg-blue-950 text-white px-4 py-2">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-black px-4 py-2">1</td>
          <td className="border border-black px-4 py-2">no need to come College</td>
          <td className="border border-black px-4 py-2 w-10"><button className='w-20 rounded-md bg-blue-500' onClick={() => handleOptions("EditAnnouncement")}>Edit</button></td>
          <td className="border border-black px-4 py-2 w-10"><button className='w-20 rounded-md bg-blue-500'>Delete</button></td>

        </tr>
        <tr>
          <td className="border border-black px-4 py-2 w-10">2</td>
          <td className="border border-black px-4 py-2">holidays for winter</td>
          <td className="border border-black px-4 py-2 w-10"><button className='w-20 rounded-md bg-blue-500' onClick={() => handleOptions("EditAnnouncement")}>Edit</button></td>
          <td className="border border-black px-4 py-2 w-10"><button className='w-20 rounded-md bg-blue-500'>Delete</button></td>
        </tr>
      </tbody>
    </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcement;
