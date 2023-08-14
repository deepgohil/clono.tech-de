import { useState } from 'react';


function Form() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [photo, setPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('phoneNumber', phoneNumber);
    formData.append('file', photo);

    try {
      const response = await fetch('https://deepgohil-glorious-halibut-rvg4pjvr7v5cwjj4-8000.preview.app.github.dev/uploadfile', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  return (
    <div className="bg-[#323232] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-4 mx-auto bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">Enter your information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:bg-white focus:shadow-md"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:bg-white focus:shadow-md"
              id="phoneNumber"
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="photo">
              Photo
            </label>
            <input
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:bg-white focus:shadow-md"
              id="photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
            />
          </div>
          <div className="flex items-center justify-end">
            <button
              className="px-4 py-2 text-white font-bold bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
