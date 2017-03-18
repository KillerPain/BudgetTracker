namespace BudgetTracker.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class added_currency : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Currencies",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        ShortTitle = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            AddColumn("dbo.Transactions", "Currency_ID", c => c.Int());
            CreateIndex("dbo.Transactions", "Currency_ID");
            AddForeignKey("dbo.Transactions", "Currency_ID", "dbo.Currencies", "ID");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Transactions", "Currency_ID", "dbo.Currencies");
            DropIndex("dbo.Transactions", new[] { "Currency_ID" });
            DropColumn("dbo.Transactions", "Currency_ID");
            DropTable("dbo.Currencies");
        }
    }
}
