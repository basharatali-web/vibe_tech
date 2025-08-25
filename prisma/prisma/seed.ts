import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Plans
  await prisma.plan.upsert({
    where: { slug: "free" },
    update: {},
    create: {
      slug: "free",
      name: "Free",
      price: 0,
      currency: "PKR",
      features: { features: ["Basic Access"] },
      limits: { monthly: 1000 },
    },
  });
  await prisma.plan.upsert({
    where: { slug: "pro" },
    update: {},
    create: {
      slug: "pro",
      name: "Pro",
      price: 250000,
      currency: "PKR",
      features: { features: ["Priority Support"] },
      limits: { monthly: 10000 },
    },
  });
  await prisma.plan.upsert({
    where: { slug: "business" },
    update: {},
    create: {
      slug: "business",
      name: "Business",
      price: 750000,
      currency: "PKR",
      features: { features: ["Teams"] },
      limits: { monthly: 100000 },
    },
  });

  // Admin user
  const adminPass = await hash("Admin@123", 10);
  await prisma.user.upsert({
    where: { email: "admin@saasvibetech.com" },
    update: { role: "ADMIN" },
    create: {
      email: "admin@saasvibetech.com",
      passwordHash: adminPass,
      role: "ADMIN",
      name: "Admin",
    },
  });

  console.log("Seed complete ✔");
}

main().finally(() => prisma.$disconnect());
