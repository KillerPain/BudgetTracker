using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BudgetTracker.Models.AppModels
{
    public class Transaction
    {

        public int ID { get; set;}
        public double Amount { get; set; }
        public virtual Product Product { get; set; }
        public virtual Currency Currency { get; set; }
        public virtual UserInfo User { get; set; }

    }
}