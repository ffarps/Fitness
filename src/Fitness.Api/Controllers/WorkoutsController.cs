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
        [HttpPost("AddNewWorkout")]
        public IActionResult AddNewWorkout([FromQuery]WorkoutEntity workoutEntity)
        {
            Workout.SaveWorkout(workoutEntity);
            return Ok(new { messague = "Workout created successfully" });
        }

        [HttpGet("getWorkout/{id}")]
        public IActionResult GetWorkout(int id)
        {
            var businessLogic = new Workout();
            var workout = businessLogic.GetWorkoutById(id);
            if (workout == null)
            {
                return NotFound(new {messague = "Workout not found"});
            }
            return Ok(workout);
        }
        [HttpGet("GetAllWorkouts")]
        public IActionResult GetAllWorkouts()
        {
            var businessLogic = new Workout();
            var workouts = businessLogic.GetAllWorkouts();
            return Ok(workouts);
        }
        [HttpPut("UpdateWorkout/{id}")]
        public IActionResult UpdateWorkout(int id, [FromBody]WorkoutEntity workoutEntity)
        {
            var businessLogic = new Workout();
            var UpdateWorkout =businessLogic.UpdateWorkout(id,workoutEntity);
            if (UpdateWorkout == null)
            {
                return NotFound(new {messague = "Workout not found"});
            }
            return Ok(new {messague = "Workout updated successfully"});
        }
        [HttpDelete("DeleteWorkout/{id}")]
        public IActionResult DeleteWorkout(int id)
        {
            var businessLogic = new Workout();
            var isDeleted = businessLogic.DeleteWorkout(id);
            if (!isDeleted)
            {
                return NotFound(new {messague = "Workout not found"});
            }
            return Ok(new {messague = "Workout deleted successfully"});
        }
    }
}
