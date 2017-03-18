namespace BudgetTracker.Models
{
    using AppModels;
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class DatabaseModels : DbContext
    {
        public DatabaseModels()
            : base("name=DatabaseModels")
        {
        }

        public virtual DbSet<Transaction> Transactions { get; set; }
        public virtual DbSet<AspNetUser> AspNetUsers { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<Currency> Currencies { get; set; }
        public virtual DbSet<AspNetRole> AspNetRoles { get; set; }
        public virtual DbSet<AspNetUserClaim> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogin> AspNetUserLogins { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            //modelBuilder.Entity<AspNetUserClaim>()
            //.HasKey(r => new { r.UserId, r. })
            //.ToTable("AspNetUserRoles");

            modelBuilder.Entity<AspNetUserLogin>()
                .HasKey(l => new { l.LoginProvider, l.ProviderKey, l.UserId })
                .ToTable("AspNetUserLogins");
        }

        public System.Data.Entity.DbSet<BudgetTracker.Models.UserInfo> UserInfoes { get; set; }
    }



}