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
        public void SaveWorkout(WorkoutEntity workoutEntity)
        {
            //validation
            var repo = new WorkoutRepo();
            repo.SaveWorkout(workoutEntity);
        }
    }
}
