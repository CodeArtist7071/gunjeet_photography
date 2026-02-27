import { useState } from "react";
// import { FiPlus, FiSettings, FiUser, FiCamera } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Plus, PlusCircle, Settings, User } from "lucide-react";

const FloatingActionButton = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  // Array of child buttons with icon and color
  const childButtons = [
    { icon: <Camera size={20} />, bg: "bg-blue-500", onClick: () => alert("Camera clicked!") },
    { icon: <User size={20} />, bg: "bg-green-500", onClick: () => alert("User clicked!") },
    { icon: <Settings size={20} />, bg: "bg-purple-500", onClick: () => alert("Settings clicked!") },
  ];

  return (
    <div className="fixed bottom-20 right-8 flex flex-col items-center z-50">
      <AnimatePresence>
        {open &&
          childButtons.map((btn, index) => {
            const yOffset = (index + 1) * -5; // vertical spacing
            return (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 0, scale: 0.5 }}
                animate={{ opacity: 1, y: yOffset, scale: 1 }}
                exit={{ opacity: 0, y: 0, scale: 0.5 }}
                transition={{ type: "ease",
                  stiffness:2,   // lower for smooth fluid motion
                  damping: 1, // lower for bounce-free movement
                  mass: 0.8,
                  delay: index * .02, }}
                className={`w-12 h-12 rounded-full text-white flex items-center justify-center shadow-lg my-2 hover:brightness-110 transition ${btn.bg}`}
                onClick={btn.onClick}
              >
                {btn.icon}
              </motion.button>
            );
          })}
      </AnimatePresence>

      {/* Main FAB */}
      <button
        className={`w-12 h-12 rounded-full bg-slate-100 text-black flex items-center justify-center shadow-xl hover:bg-black hover:text-white transition-transform duration-300 transform ${
          open ? "rotate-45" : "rotate-0"
        }`}
        onClick={toggleOpen}
      >
        <Plus size={28} />
      </button>
    </div>
  );
};

export default FloatingActionButton;