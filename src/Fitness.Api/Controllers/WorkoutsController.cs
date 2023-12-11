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
    }
}
