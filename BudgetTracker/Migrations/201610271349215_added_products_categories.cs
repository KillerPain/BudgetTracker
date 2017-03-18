namespace BudgetTracker.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class added_products_categories : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Products",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        Category_ID = c.Int(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Categories", t => t.Category_ID)
                .Index(t => t.Category_ID);
            
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            AddColumn("dbo.Transactions", "Product_ID", c => c.Int());
            CreateIndex("dbo.Transactions", "Product_ID");
            AddForeignKey("dbo.Transactions", "Product_ID", "dbo.Products", "ID");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Transactions", "Product_ID", "dbo.Products");
            DropForeignKey("dbo.Products", "Category_ID", "dbo.Categories");
            DropIndex("dbo.Products", new[] { "Category_ID" });
            DropIndex("dbo.Transactions", new[] { "Product_ID" });
            DropColumn("dbo.Transactions", "Product_ID");
            DropTable("dbo.Categories");
            DropTable("dbo.Products");
        }
    }
}
