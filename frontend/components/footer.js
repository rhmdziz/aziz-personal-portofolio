export default function Footer() {
  return (
    <footer className="bg-[var(--gray-primary)] py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm text-[var(--gray-secondary)]">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
