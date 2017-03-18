using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BudgetTracker.Models.AppModels
{
    public class Product
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public virtual Category Category { get; set; }
        public virtual IEnumerable<Transaction> Transactions { get; set; }
    }
}