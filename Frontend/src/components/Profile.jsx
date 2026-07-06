import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div className="max-w-6xl mx-auto p-5">

      {/* User Info */}
      <div className="bg-base-200 rounded-xl p-6 mb-6 flex items-center gap-5">

        <div className="avatar">
          <div className="w-24 rounded-full">
            <img
              src="https://i.pravatar.cc/150?img=5"
              alt="profile"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Anurag</h2>
          <p className="text-gray-500">@anurag999</p>

          <div className="flex gap-5 mt-2">
            <span>20 Videos</span>
            <span>10 Playlists</span>
            <span>150 Subscribers</span>
          </div>
        </div>
      </div>

      {/* Tabs */}

      <div className="tabs tabs-boxed mb-5">

        <NavLink
          to="history"
          className={({ isActive }) =>
            `tab ${isActive ? "tab-active" : ""}`
          }
        >
          History
        </NavLink>

        <NavLink
          to="likes"
          className={({ isActive }) =>
            `tab ${isActive ? "tab-active" : ""}`
          }
        >
          Likes
        </NavLink>

        <NavLink
          to="playlists"
          className={({ isActive }) =>
            `tab ${isActive ? "tab-active" : ""}`
          }
        >
          Playlists
        </NavLink>

      </div>

      <Outlet />

    </div>
  );
}

export default Profile;