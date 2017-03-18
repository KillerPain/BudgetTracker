using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using BudgetTracker.Models;

namespace BudgetTracker.Controllers.Api
{
    [Authorize]
    public class CategoriesController : ApiController
    {
        private budgetTrackerEntities db = new budgetTrackerEntities();

        public class GetCategoriesRequestModel {
            public GetCategoriesRequestModel() {
                this.Products = false;
                this.UserInfo = false;
            }
            public bool? Products { get; set; }
            public bool? UserInfo { get; set; }
        }

        public IQueryable<Category> GetCategories()
        {
            var id = this.GetUser(db).ID;
            var set = db.Categories.Where(c => c.User_ID == id || c.User_ID == null);
            return set;
        }

        // GET: api/Categories
        [HttpPost]
        [Route("api/Categories/GetCategoriesDefault")]
        public IEnumerable<Category> GetCategoriesDefault(GetCategoriesRequestModel model = null)
        {

            if (model == null) {
                model = new GetCategoriesRequestModel();
            }

            var id = this.GetUser(db).ID;
            var set = db.Categories.Where(c => c.User_ID == id || c.User_ID == null);
            if (model.Products.HasValue && model.Products.Value) set.Include(c => c.Products);
            if (model.UserInfo.HasValue && model.UserInfo.Value) set.Include(c => c.UserInfo);
            return set.ToList();
        }

        // GET: api/Categories/5
        [ResponseType(typeof(Category))]
        public IHttpActionResult GetCategory(int id)
        {
            Category category = db.Categories.Find(id);
            if (category == null)
            {
                return NotFound();
            }

            return Ok(category);
        }

        // PUT: api/Categories/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCategory(int id, Category category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != category.ID)
            {
                return BadRequest();
            }

            db.Entry(category).State = EntityState.Modified;

            try
            {
                category.User_ID = this.GetUser(db).ID;
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Categories
        [ResponseType(typeof(Category))]
        public IHttpActionResult PostCategory(Category category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            category.User_ID = this.GetUser(db).ID;
            db.Categories.Add(category);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = category.ID }, category);
        }

        // DELETE: api/Categories/5
        [ResponseType(typeof(Category))]
        public IHttpActionResult DeleteCategory(int id)
        {
            Category category = db.Categories.Find(id);
            if (category == null)
            {
                return NotFound();
            }

            db.Categories.Remove(category);
            db.SaveChanges();

            return Ok(category);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CategoryExists(int id)
        {
            return db.Categories.Count(e => e.ID == id) > 0;
        }
    }
}