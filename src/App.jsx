import React from "react";
import Countdown from "./Countdown";
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-gradient-to-l from-zinc-400 to-zinc-900 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">2025</h1>
          <a
            href="https://github.com/rohith1604"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Countdown />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-l from-zinc-400 to-zinc-900 text-white py-4">
        <div className="container mx-auto px-2 text-center">
          <p className="text-sm font-semibold capitalize">All licenses are taken @2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
