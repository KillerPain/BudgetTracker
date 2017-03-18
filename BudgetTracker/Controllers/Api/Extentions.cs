using BudgetTracker.Models;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace BudgetTracker.Controllers.Api
{
    public static class Extentions
    {

        public static UserInfo GetUser(this ApiController controller, budgetTrackerEntities context) {
            var id = controller.User.Identity.GetUserId();
            return context.UserInfoes.FirstOrDefault(ui => ui.User_Id == id);
        }

    }
}