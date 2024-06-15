import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { sign } from "hono/jwt";
import { withAccelerate } from "@prisma/extension-accelerate";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.post("/api/v1/signup", async (c) => {
  console.log("DATABASE_URL:", c.env?.DATABASE_URL);
  console.log("JWT_SECRET:", c.env?.JWT_SECRET);

  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: c.env?.DATABASE_URL,
      },
    },
  }).$extends(withAccelerate());

  const body = await c.req.json();
  if (!body.email || !body.password) {
    c.status(400);
    return c.json({ error: "email and password are required" });
  }

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
  } catch (e) {
    console.error("Error during signup:", e);
    c.status(403);
    return c.json({ error: "error while signing up" });
  }
});

app.post('/api/v1/signin', async (c) => {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: c.env?.DATABASE_URL,
      },
    },
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({ error: "user not found" });
  }

  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({ jwt });
});

app.post("/api/v1/blog", (c) => {
  return c.text("blog route");
});

app.get("/api/v1/blog/:id", (c) => {
  return c.text("blog id route");
});

app.get("/api/v1/blog/bulk", (c) => {
  return c.text("blog bulk route");
});

export default app;
