const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');


const app = express();
const port = 3000;

const url = "mongodb+srv://manishagolane:gAdesVGVFF6QDC98@nodeproject.duzuv.mongodb.net/?retryWrites=true&w=majority&appName=NodeProject";
const dbName = "firstDatabase";

let client, db, collection;

async function connectDB() {
    try {
        client = new MongoClient(url);
        await client.connect();
        console.log("Connected Successfully to MongoDB!");
        db = client.db(dbName);
        collection = db.collection('User'); // Make sure the collection exists in the DB
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Insert Document
app.post('/user', async (req, res) => {
    try {
        const { firstname, lastname, city } = req.body;
        const data = { firstname, lastname, city };

        if (!collection) {
            return res.status(500).send("Database not connected.");
        }

        const result = await collection.insertOne(data);
        res.send(result);
    } catch (error) {
        console.error("Error inserting user:", error);
        res.status(500).send("Failed to insert user.");
    }
});

// Get all Documents
app.get('/users', async (req, res) => {
    try {
        const users = await collection.find({}).toArray();
        res.send(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Failed to fetch users.");
    }
});

// Update a Document
app.put('/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { firstname, lastname, city } = req.body;
        const data = { firstname, lastname, city };

        if (!collection) {
            return res.status(500).send("Database not connected.");
        }

        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: data }
        );

        if (result.modifiedCount === 0) {
            return res.status(404).send("User not found.");
        }

        res.send(result);
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).send("Failed to update user.");
    }
});

// Remove a Document
app.delete('/user/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if (!collection) {
            return res.status(500).send("Database not connected.");
        }

        const result = await collection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return res.status(404).send("User not found.");
        }

        res.send(result);
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send("Failed to delete user.");
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

