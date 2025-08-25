import { prisma } from "@/lib/db";
import { compare } from "bcryptjs";

export async function authenticate(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return null;
  const ok = await compare(password, user.passwordHash);
  return ok ? user : null;
}

export function isAdmin(u?: { role?: string | null }) {
  return u?.role === "ADMIN";
}
