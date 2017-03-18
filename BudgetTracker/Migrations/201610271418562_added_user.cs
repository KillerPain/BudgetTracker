namespace BudgetTracker.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class added_user : DbMigration
    {
        public override void Up()
        {
            
            CreateTable(
                "dbo.UserInfoes",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Balance = c.Double(nullable: false),
                        User_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.AspNetUsers", t => t.User_Id)
                .Index(t => t.User_Id);
            
            
            AddColumn("dbo.Transactions", "User_ID", c => c.Int());
            CreateIndex("dbo.Transactions", "User_ID");
            AddForeignKey("dbo.Transactions", "User_ID", "dbo.UserInfoes", "ID");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Transactions", "User_ID", "dbo.UserInfoes");
            DropForeignKey("dbo.UserInfoes", "User_Id", "dbo.AspNetUsers");
            DropIndex("dbo.UserInfoes", new[] { "User_Id" });
            DropIndex("dbo.Transactions", new[] { "User_ID" });
            DropColumn("dbo.Transactions", "User_ID");
            DropTable("dbo.UserInfoes");
        }
    }
}
