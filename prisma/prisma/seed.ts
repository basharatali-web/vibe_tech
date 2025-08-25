import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Plans (prices are in minor units: USD cents)
  await prisma.plan.upsert({
    where: { slug: "free" },
    update: { currency: "USD", price: 0, isActive: true, features: { features: ["Basic Analytics", "3 runs/day", "Community Support"] }, limits: { monthly: 1000 } },
    create: {
      slug: "free",
      name: "Free",
      price: 0,
      currency: "USD",
      features: { features: ["Basic Analytics", "3 runs/day", "Community Support"] },
      limits: { monthly: 1000 },
      isActive: true,
    },
  });

  await prisma.plan.upsert({
    where: { slug: "pro" },
    update: { currency: "USD", price: 999, isActive: true, features: { features: ["Unlimited runs", "Advanced Analytics", "API access", "Email + Chat Support"] }, limits: { monthly: 10000 } },
    create: {
      slug: "pro",
      name: "Pro",
      price: 999, // $9.99
      currency: "USD",
      features: { features: ["Unlimited runs", "Advanced Analytics", "API access", "Email + Chat Support"] },
      limits: { monthly: 10000 },
      isActive: true,
    },
  });

  await prisma.plan.upsert({
    where: { slug: "corporate" },
    update: { currency: "USD", price: 4999, isActive: true, features: { features: ["All Pro features", "Multi-user accounts", "Deep analytics", "Dedicated support", "Custom integrations"] }, limits: { monthly: 100000 } },
    create: {
      slug: "corporate",
      name: "Corporate",
      price: 4999, // $49.99
      currency: "USD",
      features: { features: ["All Pro features", "Multi-user accounts", "Deep analytics", "Dedicated support", "Custom integrations"] },
      limits: { monthly: 100000 },
      isActive: true,
    },
  });

  // ISP Enterprise in pipeline (not active yet)
  await prisma.plan.upsert({
    where: { slug: "isp-enterprise" },
    update: { currency: "USD", price: 0, isActive: false, features: { features: ["Enterprise-scale infra", "24/7 dedicated team", "High security", "Custom pricing & SLAs"] }, limits: { monthly: 1000000 } },
    create: {
      slug: "isp-enterprise",
      name: "ISP Enterprise (Coming Soon)",
      price: 0,
      currency: "USD",
      features: { features: ["Enterprise-scale infra", "24/7 dedicated team", "High security", "Custom pricing & SLAs"] },
      limits: { monthly: 1000000 },
      isActive: false, // pipeline
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
