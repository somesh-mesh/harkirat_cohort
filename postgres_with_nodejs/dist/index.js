"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://neondb_owner:IQTCglApf4q5@ep-lingering-dust-a51b4nxo.us-east-2.aws.neon.tech/test_db?sslmode=require"
});
function connectClient() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log("Connected to the database successfully.");
        }
        catch (err) {
            console.error("Failed to connect to the database:", err);
        }
    });
}
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);
            console.log('Table created successfully:', result);
        }
        catch (err) {
            console.error('Error creating table:', err);
        }
    });
}
function insertUser(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield client.query(`
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING *
    `, [username, email, password]);
            console.log('User inserted successfully:', result.rows[0]);
        }
        catch (err) {
            console.error('Error inserting user:', err);
        }
    });
}
function updateUser(id, username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield client.query(`
      UPDATE users
      SET username = $1, email = $2, password = $3
      WHERE id = $4
      RETURNING *
    `, [username, email, password, id]);
            console.log('User updated successfully:', result.rows[0]);
        }
        catch (err) {
            console.error('Error updating user:', err);
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield connectClient();
        yield createUsersTable();
        yield insertUser('john_doe', 'john@example.com', 'password123');
        // Uncomment to test update and delete functions
        // await updateUser(1, 'john_doe_updated', 'john_updated@example.com', 'newpassword123');
        // await deleteUser(1);
        yield client.end();
        console.log("Disconnected from the database successfully.");
    });
}
main().catch(err => console.error('Error in main execution:', err));
