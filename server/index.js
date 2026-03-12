import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { nanoid } from "nanoid";

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database
const adapter = new JSONFile("db.json");
const db = new Low(adapter, { projects: [] });

await db.read();
db.data ||= { projects: [] };

// API ROUTES FIRST
app.get("/api/projects", async (req, res) => {
  await db.read();
  res.json(db.data.projects);
});

app.post("/api/projects", async (req, res) => {
  const { title, description, image } = req.body;

  const newProject = {
    id: nanoid(),
    title,
    description,
    image,
  };

  db.data.projects.push(newProject);
  await db.write();

  res.json(newProject);
});

app.delete("/api/projects/:id", async (req, res) => {
  const { id } = req.params;
  db.data.projects = db.data.projects.filter(p => p.id !== id);
  await db.write();
  res.json({ success: true });
});

// 🔥 SERVE REACT BUILD AFTER API
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});