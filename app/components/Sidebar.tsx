'use client'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

interface SidebarLinkProps {
  icon: any; // Using `any` for simplicity; you might want to define a more precise type
  text: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon, text }) => (
  <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded-md">
    <FontAwesomeIcon icon={icon} className="w-6 h-6" />
    <span className="ml-2">{text}</span>
  </a>
);

const Sidebar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Sidebar for larger screens */}
      <aside className="hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 md:w-64 md:bg-gray-800 md:overflow-y-auto">
        <div className="md:flex md:flex-col md:flex-grow">
          <div className="md:flex md:items-center md:justify-between md:p-4 md:text-white">
            <span className="md:text-lg md:font-semibold">Brand</span>
          </div>
          <nav className="md:mt-5 md:flex md:flex-col md:flex-grow md:pb-4 md:overflow-y-auto">
            <SidebarLink icon={faHome} text="Home" />
            <SidebarLink icon={faEnvelope} text="Messages" />
            <SidebarLink icon={faUser} text="Profile" />
            <SidebarLink icon={faCog} text="Settings" />
          </nav>
        </div>
      </aside>

      {/* Bottom bar for smaller screens */}
      <div className="md:hidden fixed inset-x-0 bottom-0 bg-gray-800 p-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white w-full"
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faCog : faHome} className="w-6 h-6" />
        </button>

        {isMobileMenuOpen && (
          <div className="mt-4">
            <SidebarLink icon={faHome} text="Home" />
            <SidebarLink icon={faEnvelope} text="Messages" />
            <SidebarLink icon={faUser} text="Profile" />
            <SidebarLink icon={faCog} text="Settings" />
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
