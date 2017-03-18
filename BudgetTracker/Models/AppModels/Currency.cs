using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BudgetTracker.Models.AppModels
{
    public class Currency
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string ShortTitle { get; set; }

        public virtual IEnumerable<Transaction> Transactions { get; set; }
    }
}