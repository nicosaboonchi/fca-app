import React, { useState } from "react";
import { PanelLeft } from "lucide-react";
import { Button } from "@/components/button";
import Image from "next/image";
import Link from "next/link";

const SideBar = ({
  links,
}: {
  links: { name: string; icon: React.ReactElement; href: string }[];
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div
      className={`${
        isCollapsed ? "w-[56px] px-2" : "w-[240px] px-4"
      } bg-primary py-4 gap-6 flex flex-col justify-between transition-all duration-300 ease-in-out`}
    >
      <div className="flex flex-col gap-4">
        <div
          className={`flex ${
            isCollapsed ? "justify-center" : "justify-between pl-4"
          } pb-4`}
        >
          <Image
            width={24}
            height={24}
            src="Vector.svg"
            alt="Vector"
            className={`${isCollapsed ? "hidden" : "block"}`}
          />
          <Button variant="ghost" onClick={() => setIsCollapsed(!isCollapsed)}>
            <PanelLeft width={24} height={24} className="text-white" />
          </Button>
        </div>
        {links.map((link, index) => (
          <Button
            key={index}
            asChild
            variant="sidebar"
            size={isCollapsed ? "icon" : "md"}
            className={isCollapsed ? "justify-center" : "justify-start"}
          >
            <Link href={link.href}>
              {link.icon}
              <span
                className={`text-white ${isCollapsed ? "hidden" : "block"}`}
              >
                {link.name}
              </span>
            </Link>
          </Button>
        ))}
      </div>

      <div className="flex items-center gap-3 h-10 w-full">
        <div className="h-full aspect-square">
          <Image
            src="/avatar.png"
            alt="profile"
            width={40}
            height={40}
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center min-w-0 flex-1">
          <span
            className={`text-white leading-tight truncate ${
              isCollapsed ? "hidden" : "block"
            }`}
          >
            Nico Saboonchi
          </span>
          <span
            className={`${
              isCollapsed ? "hidden" : "block"
            } text-gray-400 text-sm leading-tight truncate`}
          >
            Application Developer
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
