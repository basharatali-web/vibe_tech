"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const authed = !!session?.user;
  const isAdmin = (session as any)?.role === "ADMIN";

  return (
    <header className="sticky top-0 backdrop-blur bg-black/40 border-b border-white/10 z-40">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2 font-extrabold">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-300 inline-block"/>LatencyPro <span className="pill">SaaS</span>
        </div>
        <nav className="flex gap-2 flex-wrap items-center">
          <Link className="pill" href="/">Home</Link>
          <Link className="pill" href="/pricing">Pricing</Link>
          {authed && <Link className="pill" href="/dashboard">Dashboard</Link>}
          {authed && isAdmin && <Link className="pill" href="/(admin)">Admin</Link>}
          {!authed && <Link className="pill" href="/(auth)/sign-in">Sign In</Link>}
          {!authed && <Link className="pill" href="/(auth)/sign-up">Sign Up</Link>}
