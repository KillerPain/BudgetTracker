using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BudgetTracker.Models.AppModels
{
    public class UserInfo
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public double Balance { get; set; }

        public virtual AspNetUser User { get; set; }
        public virtual IEnumerable<Transaction> Transactions { get; set; }
    }
}