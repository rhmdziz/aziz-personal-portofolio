export default function Footer() {
  return (
    <footer className="bg-gray-primary py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
