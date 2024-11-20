using Microsoft.AspNetCore.Mvc;
using SearchifyBackend.Services;

namespace SearchifyBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SearchController : ControllerBase
    {
        private readonly ISearchService _searchService;

        public SearchController(ISearchService searchService)
        {
            _searchService = searchService;
        }

        [HttpGet]
        public IActionResult GetResults(string query)
        {
            if (string.IsNullOrWhiteSpace(query))
            {
                return BadRequest("Query cannot be empty.");
            }

            var results = _searchService.GetSearchResults(query);
            return Ok(results);
        }
    }
}
