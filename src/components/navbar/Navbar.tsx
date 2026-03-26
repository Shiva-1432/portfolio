const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 border-b border-gray-800">
      <h1 className="text-xl font-bold">Shivaaa</h1>

      <div className="flex gap-6 text-sm">
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#skills" className="hover:text-gray-400">Skills</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
