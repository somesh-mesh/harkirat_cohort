import { Client } from 'pg';

const client = new Client({
  connectionString: "postgresql://neondb_owner:IQTCglApf4q5@ep-lingering-dust-a51b4nxo.us-east-2.aws.neon.tech/test_db?sslmode=require"
});

async function connectClient() {
  try {
    await client.connect();
    console.log("Connected to the database successfully.");
  } catch (err) {
    console.error("Failed to connect to the database:", err);
  }
}

async function createUsersTable() {
  try {
    const result = await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Table created successfully:', result);
  } catch (err) {
    console.error('Error creating table:', err);
  }
}

async function insertUser(username: string, email: string, password: string) {
  try {
    const result = await client.query(`
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING *
    `, [username, email, password]);
    console.log('User inserted successfully:', result.rows[0]);
  } catch (err) {
    console.error('Error inserting user:', err);
  }
}

async function updateUser(id: any, username: any, email: any, password: any) {
  try {
    const result = await client.query(`
      UPDATE users
      SET username = $1, email = $2, password = $3
      WHERE id = $4
      RETURNING *
    `, [username, email, password, id]);
    console.log('User updated successfully:', result.rows[0]);
  } catch (err) {
    console.error('Error updating user:', err);
  }
}


async function main() {
  await connectClient();
  await createUsersTable();
  await insertUser('john_doe', 'john@example.com', 'password123');

  // Uncomment to test update and delete functions
  // await updateUser(1, 'john_doe_updated', 'john_updated@example.com', 'newpassword123');
  // await deleteUser(1);

  await client.end();
  console.log("Disconnected from the database successfully.");
}

main().catch(err => console.error('Error in main execution:', err));
