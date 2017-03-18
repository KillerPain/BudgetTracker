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

namespace BudgetTracker.Controllers
{
    public class TestTablesController : ApiController
    {
        private budgetTrackerEntities db = new budgetTrackerEntities();

        // GET: api/TestTables
        public IQueryable<TestTable> GetTestTables()
        {
            return db.TestTables;
        }

        // GET: api/TestTables/5
        [ResponseType(typeof(TestTable))]
        public IHttpActionResult GetTestTable(int id)
        {
            TestTable testTable = db.TestTables.Find(id);
            if (testTable == null)
            {
                return NotFound();
            }

            return Ok(testTable);
        }

        // PUT: api/TestTables/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTestTable(int id, TestTable testTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != testTable.ID)
            {
                return BadRequest();
            }

            db.Entry(testTable).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TestTableExists(id))
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

        // POST: api/TestTables
        [ResponseType(typeof(TestTable))]
        public IHttpActionResult PostTestTable(TestTable testTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TestTables.Add(testTable);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = testTable.ID }, testTable);
        }

        // DELETE: api/TestTables/5
        [ResponseType(typeof(TestTable))]
        public IHttpActionResult DeleteTestTable(int id)
        {
            TestTable testTable = db.TestTables.Find(id);
            if (testTable == null)
            {
                return NotFound();
            }

            db.TestTables.Remove(testTable);
            db.SaveChanges();

            return Ok(testTable);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TestTableExists(int id)
        {
            return db.TestTables.Count(e => e.ID == id) > 0;
        }
    }
}