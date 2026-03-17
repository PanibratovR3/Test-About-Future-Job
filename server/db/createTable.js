const { Client } = require("pg");
require("dotenv").config({ quiet: true });

async function createTable() {
  const SQL = `
    CREATE TABLE IF NOT EXISTS Applicants (
        Id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        FullName TEXT,
        PhoneNumber TEXT,
        IsPhoneNumberValid BOOLEAN DEFAULT FALSE,
        DateOfBirth TEXT,
        City TEXT,
        School TEXT,
        StudyingStatus TEXT,
        HasCompletedTest BOOLEAN DEFAULT FALSE,
        ActivityScore NUMERIC(3, 1),
        SocialScore NUMERIC(3, 1),
        EmotionalStabilityScore NUMERIC(3, 1),
        StructureScore NUMERIC(3, 1),
        LeadershipScore NUMERIC(3,1),
        MathScore INT,
        PhysicsScore INT 
    )    
    `;
  console.log("Seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:5432/${process.env.DB_NAME}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Finished!");
}

module.exports = createTable;
