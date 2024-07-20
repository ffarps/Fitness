using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Fitness.ServiceLibrary.Domains;
using Fitness.ServiceLibrary.Enities;

namespace Fitness.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkoutsController : ControllerBase
    {
        [HttpGet]
        public IActionResult AddNewWorkout([FromQuery]WorkoutEntity workoutEntity)
        {
            var businessLogic = new Workout();
            businessLogic.SaveWorkout(workoutEntity);
            return Ok();
        }
        //  [HttpPost]
        // public IActionResult CreateWorkout(Workout workout)
        // {
        //     // Logic to create a workout
        //     return Ok();
        // }

        // [HttpGet]
        // public IActionResult GetWorkoutsByUser(int userId)
        // {
        //     // Logic to retrieve all workouts for a user
        //     return Ok();
        // }

        // Additional methods for updating and deleting workouts
        }
}
