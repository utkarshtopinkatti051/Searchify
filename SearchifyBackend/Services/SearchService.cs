using SearchifyBackend.Models;
using SearchifyBackend.Services;

namespace SearchifyBackend.Services
{
    public class SearchService : ISearchService
    {
        // Replace with dummy data
        public IEnumerable<SearchResult> GetSearchResults(string query)
        {
            var dummyData = new List<SearchResult>
            {
                new SearchResult
                {
                    Id = 1,
                    Title = "Search Result 1",
                    Description = "This is a dummy search result for the query: " + query,
                    CreatedAt = DateTime.Now.AddMinutes(-10)
                },
                new SearchResult
                {
                    Id = 2,
                    Title = "Search Result 2",
                    Description = "Another dummy result matching the query: " + query,
                    CreatedAt = DateTime.Now.AddMinutes(-5)
                },
                new SearchResult
                {
                    Id = 3,
                    Title = "Search Result 3",
                    Description = "Yet another result for: " + query,
                    CreatedAt = DateTime.Now
                }
            };

            return dummyData.Where(r => r.Title.Contains(query) || r.Description.Contains(query));
        }
    }
}
