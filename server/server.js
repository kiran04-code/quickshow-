import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/inngest.js";
import { conntecMongose } from "./config/db.js";
import { clerkMiddleware, getAuth, clerkClient, requireAuth } from "@clerk/express";
import showRoutes from "./Routes/show.js";
const app = express();
config();

const Port = process.env.PORT || 6010;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.get("/", (req, res) => {
  res.send("✅ Backend is working!");
});

// MongoDB connection
conntecMongose(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB ERROR:", err));

// Protected route test
app.get("/protected", requireAuth(), async (req, res) => {
  const { userId } = getAuth(req);
  const user = await clerkClient.users.getUser(userId);
  return res.json({ user });
});

// Inngest webhook route
app.use("/api/inngest", serve({
  client: inngest,
  functions, // ✅ Make sure this is passed correctly
}));
app.use("/api/show",showRoutes)
app.listen(Port, () => {
  console.log(`🚀 Server is running at http://localhost:${Port}`);
});
