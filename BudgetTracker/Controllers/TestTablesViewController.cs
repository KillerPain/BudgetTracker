using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using BudgetTracker.Models;

namespace BudgetTracker.Controllers
{
    public class TestTablesViewController : Controller
    {
        private budgetTrackerEntities db = new budgetTrackerEntities();

        // GET: TestTablesView
        public ActionResult Index()
        {
            return View(db.TestTables.ToList());
        }

        // GET: TestTablesView/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TestTable testTable = db.TestTables.Find(id);
            if (testTable == null)
            {
                return HttpNotFound();
            }
            return View(testTable);
        }

        // GET: TestTablesView/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: TestTablesView/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,Title")] TestTable testTable)
        {
            if (ModelState.IsValid)
            {
                db.TestTables.Add(testTable);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(testTable);
        }

        // GET: TestTablesView/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TestTable testTable = db.TestTables.Find(id);
            if (testTable == null)
            {
                return HttpNotFound();
            }
            return View(testTable);
        }

        // POST: TestTablesView/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,Title")] TestTable testTable)
        {
            if (ModelState.IsValid)
            {
                db.Entry(testTable).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(testTable);
        }

        // GET: TestTablesView/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TestTable testTable = db.TestTables.Find(id);
            if (testTable == null)
            {
                return HttpNotFound();
            }
            return View(testTable);
        }

        // POST: TestTablesView/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            TestTable testTable = db.TestTables.Find(id);
            db.TestTables.Remove(testTable);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
