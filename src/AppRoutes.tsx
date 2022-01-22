import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts";
import { Home, User, Users } from "./pages";

export const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<User />} />
      </Route>
    </Routes>
  );
};
