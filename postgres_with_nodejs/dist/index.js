"use strict";
// import { Client } from 'pg';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const client = new Client({
//   connectionString: "postgresql://neondb_owner:IQTCglApf4q5@ep-lingering-dust-a51b4nxo.us-east-2.aws.neon.tech/test_db?sslmode=require"
// });
// async function connectClient() {
//   try {
//     await client.connect();
//     console.log("Connected to the database successfully.");
//   } catch (err) {
//     console.error("Failed to connect to the database:", err);
//   }
// }
// async function createUsersTable() {
//   try {
//     const result = await client.query(`
//       CREATE TABLE IF NOT EXISTS users (
//         id SERIAL PRIMARY KEY,
//         username VARCHAR(50) UNIQUE NOT NULL,
//         email VARCHAR(255) UNIQUE NOT NULL,
//         password VARCHAR(255) NOT NULL,
//         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//       )
//     `);
//     console.log('Table created successfully:', result);
//   } catch (err) {
//     console.error('Error creating table:', err);
//   }
// }
// async function insertUser(username: string, email: string, password: string) {
//   try {
//     const result = await client.query(`
//       INSERT INTO users (username, email, password)
//       VALUES ($1, $2, $3)
//       RETURNING *
//     `, [username, email, password]);
//     console.log('User inserted successfully:', result.rows[0]);
//   } catch (err) {
//     console.error('Error inserting user:', err);
//   }
// }
// async function updateUser(id: any, username: any, email: any, password: any) {
//   try {
//     const result = await client.query(`
//       UPDATE users
//       SET username = $1, email = $2, password = $3
//       WHERE id = $4
//       RETURNING *
//     `, [username, email, password, id]);
//     console.log('User updated successfully:', result.rows[0]);
//   } catch (err) {
//     console.error('Error updating user:', err);
//   }
// }
// async function main() {
//   await connectClient();
//   await createUsersTable();
//   await insertUser('john_doe', 'john@example.com', 'password123');
//   // Uncomment to test update and delete functions
//   // await updateUser(1, 'john_doe_updated', 'john_updated@example.com', 'newpassword123');
//   // await deleteUser(1);
//   await client.end();
//   console.log("Disconnected from the database successfully.");
// }
// main().catch(err => console.error('Error in main execution:', err));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const pg_1 = require("pg");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3001;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
const client = new pg_1.Client({
    connectionString: "postgresql://neondb_owner:IQTCglApf4q5@ep-lingering-dust-a51b4nxo.us-east-2.aws.neon.tech/test_db?sslmode=require"
});
client.connect()
    .then(() => console.log("Connected to the database successfully."))
    .catch(err => console.error("Failed to connect to the database:", err));
app.post('/api/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    try {
        const result = yield client.query(`
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING *
    `, [username, email, password]);
        res.status(201).json(result.rows[0]);
    }
    catch (err) {
        console.error('Error inserting user:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
app.get('/api/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield client.query('SELECT * FROM users');
        res.status(200).json(result.rows);
    }
    catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
