import React from "react";
import { NavLink } from "react-router-dom";

export const sidebarItemsGenerator = (items, collapsed) => {
  return items.reduce((acc, item, index) => {
    if (item.hide) return acc;

    if (item.section && !collapsed) {
      acc.push({
        key: `section-${index}`,
        type: "section",
        label: (
          <div className="text-xs text-gray-400 uppercase my-4 border-t pt-3">
            {item.section}
          </div>
        ),
      });
    }

    const renderLabel = (name, path) => (
      <NavLink
        className={({ isActive }) => (isActive ? "font-bold" : "")}
        to={`/${path}`}
      >
        {name}
        {item.new && (
          <span className="ml-5 px-2 py-0.5 text-xs font-bold text-white bg-primary rounded-full">
            New
          </span>
        )}
      </NavLink>
    );

    if (item.path && item.name && !item.children) {
      acc.push({
        key: item.name,
        icon: item.icon
          ? React.createElement(item.icon, { className: "size-5" })
          : null,
        label: renderLabel(item.name, item.path),
      });
    }

    if (item.children && item.children.length > 0) {
      const visibleChildren = item.children.filter((child) => !child.hide);

      if (visibleChildren.length > 0) {
        acc.push({
          key: item.name,
          icon: item.icon
            ? React.createElement(item.icon, { className: "size-5" })
            : null,
          label: item.name,
          children: visibleChildren.map((child) => ({
            key: child.name,
            icon: child.icon
              ? React.createElement(child.icon, { className: "size-5" })
              : null,
            label: renderLabel(child.name, child.path),
          })),
        });
      }
    }

    return acc;
  }, []);
};
