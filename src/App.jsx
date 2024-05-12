import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";
import Sidebar, { SidebarItem } from "./components/Sidebar/Sidebar";
import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";



function App() {

  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }

  return (
    <>
      <div className="bg-yellow-100 dark:bg-blue-900">
        <button onClick={() => darkModeHandler()}>
          {

            dark && <IoSunny />
          }
          {
            !dark && <IoMoon />
          }
        </button>


        <div className="flex">
          <Sidebar>
            <SidebarItem icon={<Home size={20} />} text="Home" alert />
            <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />
            <SidebarItem icon={<StickyNote size={20} />} text="Projects" alert />
            <SidebarItem icon={<Calendar size={20} />} text="Calendar" />
            <SidebarItem icon={<Layers size={20} />} text="Tasks" />
            <SidebarItem icon={<Flag size={20} />} text="Reporting" />
            <hr className="my-3" />
            <SidebarItem icon={<Settings size={20} />} text="Settings" />
            <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
          </Sidebar>
        </div>
      </div >
    </>
  )
}

export default App
