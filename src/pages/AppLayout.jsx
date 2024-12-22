import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function AppLayout() {
  return (
    <main className="flex min-h-screen flex-col justify-between overflow-hidden">
      <section className="flex flex-col">
        <Navbar />
        <section className="px-10 py-5">
          <Outlet />
        </section>
      </section>
      <Footer />
    </main>
  );
}
