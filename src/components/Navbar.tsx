
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#1A1F2C] shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Blog Battle</Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-white hover:text-[#9b87f5] transition-colors">Главная</Link>
          <Link to="/cases" className="text-white hover:text-[#9b87f5] transition-colors">Кейсы</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
