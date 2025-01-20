import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { ArrowUp } from "lucide-react";

export default function AppLayout() {
  const { loading } = useSelector((state) => state.loading);
  const [scrollToTopRef, scrollToTop] = useScrollToTop();
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        dispatch({ type: "user/login", payload: user });
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col justify-between overflow-scroll">
      <Toaster />
      <section className="flex flex-col" ref={scrollToTopRef}>
        <Navbar />
        <section className="px-10 py-5">
          <Outlet />
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 max-w-fit rounded-full border-2 border-black bg-gray-200 p-2 hover:bg-gray-400"
          >
            <ArrowUp />
          </button>
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
