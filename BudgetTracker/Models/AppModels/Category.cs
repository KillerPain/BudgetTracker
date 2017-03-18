using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BudgetTracker.Models.AppModels
{
    public class Category
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public virtual IEnumerable<Product> Products { get; set; }
    }
}