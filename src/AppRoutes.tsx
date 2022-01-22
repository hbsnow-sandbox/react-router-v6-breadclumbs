import { Routes, Route } from "react-router-dom";

import { Home, User, Users } from "./pages";

export const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:userId" element={<User />} />
    </Routes>
  );
};
