using Fitness.ServiceLibrary.Enities;
using Fitness.ServiceLibrary.Repos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fitness.ServiceLibrary.Domains
{
    public class Workout
    {
        private static List<WorkoutEntity> _workouts = new List<WorkoutEntity>();
        private static int _nextId = 1;

        public static void SaveWorkout(WorkoutEntity workoutEntity)
        {
            workoutEntity.Id = _nextId++;
            _workouts.Add(workoutEntity);
        }
        public WorkoutEntity GetWorkoutById(int id)
        {
            return _workouts.FirstOrDefault(x => x.Id == id);
        }
        public List<WorkoutEntity> GetAllWorkouts()
        {
            return _workouts;
        }
        public WorkoutEntity UpdateWorkout(int id, WorkoutEntity workoutEntity)
        {
            var existingWorkout = GetWorkoutById(id);
            if (existingWorkout == null) return null;

            existingWorkout.Name = workoutEntity.Name;
            return existingWorkout;
        }

        public bool DeleteWorkout(int id)
        {
            var workout = GetWorkoutById(id);
            if (workout == null) return false;
            _workouts.Remove(workout);
            return true;
        }
    }
}
