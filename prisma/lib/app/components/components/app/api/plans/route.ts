import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const plans = await prisma.plan.findMany({ orderBy: { price: "asc" } });
  return NextResponse.json({
    items: plans.map((p) => ({
      slug: p.slug,
      name: p.name,
      price: p.price, // minor units
      currency: p.currency,
      features: (p.features as any)?.features ?? [],
      isActive: p.isActive,
    })),
  });
}
