"use client";
import Link from "next/link";
import React from "react";
import { menuControlData } from "./menuControlData";
import { usePathname } from "next/navigation";

const MenuControl = () => {
  const pathname = usePathname();
  return (
    <div className="tm-left">
      <div className="tm-left-inner">
        <div className="tm-site-header">
          <i className="fas fa-coffee fa-3x tm-site-logo" />
          <h1 className="tm-site-name">Wave Cafe</h1>
        </div>

        <nav className="tm-site-nav">
          <ul className="tm-site-nav-ul">
            {menuControlData.map((menuItem) => {
              const isActive = pathname.startsWith(menuItem.href);
              const Icon = menuItem.icon;
              return (
                <Link
                  className={
                    "tm-page-nav-item tm-page-link" +
                    (isActive ? " active" : "")
                  }
                  href={menuItem.href}
                  key={menuItem.name}
                >
                  <Icon className="tm-page-link-icon" />
                  {menuItem.name}
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuControl;
