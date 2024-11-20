using System.ComponentModel.DataAnnotations;

namespace SearchifyBackend.Models
{
    public class SearchResult
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
