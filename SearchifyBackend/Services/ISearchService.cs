using SearchifyBackend.Models;

namespace SearchifyBackend.Services
{
    public interface ISearchService
    {
        IEnumerable<SearchResult> GetSearchResults(string query);
    }
}
