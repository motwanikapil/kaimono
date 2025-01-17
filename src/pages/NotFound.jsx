import Button from "../components/Button";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 py-10">
      <h1 className="text-6xl">404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <Button to="/">Back to home page</Button>
    </main>
  );
}
