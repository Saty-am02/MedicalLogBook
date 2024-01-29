import React,{useState} from 'react'
import upload from '../../Components/Assets/icons/upload.png';

const Createannouncement = () => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [uploadedFileName, setUploadedFileName] = useState('');
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setUploadedImage(reader.result);
          setUploadedFileName(file.name);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handlePreview = () => {
      if (uploadedImage) {
          const pdfWindow = window.open('');
          pdfWindow.document.write('<html><head><title>PDF Preview</title></head><body>');
          pdfWindow.document.write(`<embed width="100%" height="100%" src="${uploadedImage}" type="application/pdf">`);
          pdfWindow.document.write('</body></html>');
        } else {
          alert('Please upload a PDF file first.');
        }
    };
  
   
    return (
      <section className='left-85 top-45 relative m-10'>
        <div className='relative flex left-7 top-7 w-auto mb-10'>
          <button className='bg-sky-500 rounded-md w-auto'>Create Announcements</button>
        </div>
  
        <div className='border-2 h-60vh rounded-md border-sky-500 relative flex flex-col justify-center items-center mt-40 m-5'>
          <div className="p-5 gap-4 grid-flow-row grid w-full md:w-3/4 lg:w-1/2">
            <form action="" className='relative top-80'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-start">
                <label htmlFor="announcementTitle" className='text-xl'>
                  Announcement Title : {" "}
                  <input
                    type="text"
                    id="announcementTitle"
                    className="px-4 border-2 border-black w-full h-10 rounded-md"
                    placeholder="Enter the Announcement"
                    required
                  />
                </label>
  
                <label htmlFor="scheduleDate" className='text-xl ml-30'>
                  Schedule date : {" "}
                  <input
                    type="text"
                    id="scheduleDate"
                    pattern='[0-9]{2}'
                    className="border-2 px-4 border-black w-full h-10 rounded-md"
                    placeholder="Enter the Schedule date "
                    required
                  />
                </label>
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-start w-auto mt-4">
                <label htmlFor="uploadedFileName" className='text-xl'>
                  Uploaded File: {" "}
                  <input
                    type="text"
                    id="uploadedFileName"
                    className="border-2 px-4 w-full h-10 rounded-md"
                    value={uploadedFileName}
                    readOnly // Make the input read-only to prevent manual changes
                  />
                </label>
  
                <label htmlFor="scheduleTime" className='text-xl'>
                  Schedule Time : {" "}
                  <input
                    type="text"
                    id="scheduleTime"
                    className="border-2 px-4 border-black w-full h-10 rounded-md"
                    placeholder="Enter the Schedule Time"
                    required
                  />
                </label>
              </div>
  
              <div className='flex justify-center items-center mt-4'>
                <label htmlFor="fileInput" className='text-xl'>
                  Upload PDF File : {" "}
                </label>
                <img
                  width="45"
                  height="45"
                  src={uploadedImage || upload}
                  alt="Uploaded File"
                  onClick={() => document.getElementById('fileInput').click()}
                  style={{ cursor: 'pointer' }}
                />
                <input
                  type="file"
                  id="fileInput"
                  className="border-2 px-4 w-full h-10 rounded-md"
                  placeholder="Upload the file"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </div>
  
              <div className="flex justify-center items-center mt-4 space-x-4">
                <button className="bg-blue-500 rounded-md w-auto h-auto text-white text-xl">Create</button>
                <button onClick={handlePreview} className="bg-blue-500 rounded-md w-auto h-auto text-white text-xl">
                  Preview
                </button>
              </div>
            </form>
  
            <div className="flex w-full h-60vh mt-4"></div>
          </div>
        </div>
      </section>
    );
  }
  

export default Createannouncement;
