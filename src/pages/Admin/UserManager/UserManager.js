import React from "react";
import SignupAdmin from "../UserManager/SignupAdmin";
import UserList from "../UserManager/UserTable/UserList";

export default function UserManager() {
  return (
    <div>
      <SignupAdmin />
      <UserList />
    </div>
  );
}
