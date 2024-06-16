function WorkoutHomeSection() {
  return (
    <div className="Workout">
      <div className="container mx-auto p-3">
        <h1 className="text-3xl font-bold mb-4">Some of the Workouts we offer</h1>
        
        {/* Workouts Section */}
        <section className="bg-gray-200 p-6 shadow-md">
          <p className="text-gray-800 text-left"> {/* Base text color */}
            Welcome to our workouts section! Here, you can find a variety of exercises and fitness routines to help you stay active and healthy.
          </p>

          <div className="text-left"> {/* Align text to the left */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold mt-4 mb-2 text-black">Strength Training 🏋️</h2>
              <p className="text-gray-900 text-opacity-90">
                Build strength and tone your muscles with our strength training exercises. Whether you're a beginner or advanced, we have something for everyone.
              </p>
              <button className="bg-react-blue px-4 py-2 text-black mt-2 hover:bg-react-dark-blue hover:text-white">
                Click to know more
              </button>
            </div>
            
            <div className="mb-6">
              <h2 className="text-2xl font-bold mt-4 mb-2 text-black">Cardio Workout ❤️‍🔥</h2>
              <p className="text-gray-900 text-opacity-90">
                Get your heart pumping with our cardio workout routine. It's perfect for improving cardiovascular health and burning calories.
              </p>
              <button className="bg-react-blue px-4 py-2 text-black mt-2 hover:bg-react-dark-blue hover:text-white">
                Click to know more
              </button>
            </div>
          </div>

          {/* Add more workout sections as needed */}
        </section>
      </div>
    </div>
  );
}

export default WorkoutHomeSection;
