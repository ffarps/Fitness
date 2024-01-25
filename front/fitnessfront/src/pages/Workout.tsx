function WorkoutSection() {
  return <div className="Workout">
    <div className="container mx-auto p-3">
        <h1 className="text-3xl font-bold mb-4">Workouts</h1>
        
        {/* Workouts Section */}
        <section className="bg-gray-400 p-6 rounded-lg shadow-md">
          <p className="text-gray-800">
            Welcome to our workouts section! Here, you can find a variety of exercises and fitness routines to help you stay active and healthy.
          </p>

          <h2 className="text-2xl font-bold mt-4 mb-2">Cardio Workout</h2>
          <p className="text-gray-700">
            Get your heart pumping with our cardio workout routine. It's perfect for improving cardiovascular health and burning calories.
          </p>

          <h2 className="text-2xl font-bold mt-4 mb-2">Strength Training</h2>
          <p className="text-gray-700">
            Build strength and tone your muscles with our strength training exercises. Whether you're a beginner or advanced, we have something for everyone.
          </p>

          {/* Add more workout sections as needed */}
        </section>
      </div>
    
    </div>;
}

export default WorkoutSection;
