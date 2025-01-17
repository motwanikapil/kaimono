import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

export default function AppLayout() {
  const { loading } = useSelector((state) => state.loading);

  return (
    <main className="relative flex min-h-screen flex-col justify-between overflow-scroll">
      <Toaster />
      <section className="flex flex-col">
        <Navbar />
        <section className="px-10 py-5">
          <Outlet />
        </section>
      </section>
      <Footer />
      {loading && (
        <section className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <article className="h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></article>
        </section>
      )}
    </main>
  );
}
