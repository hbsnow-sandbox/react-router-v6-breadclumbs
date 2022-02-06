import { NavLink, Outlet, useResolvedPath } from "react-router-dom";

import { useIsActive } from "../../hooks/useIsActive";

type Props = {
  text: string;
};

export const Breadcrumbs = (props: Props) => {
  const { text } = props;

  const resolvedLocation = useResolvedPath("");
  const isActive = useIsActive();

  return (
    <>
      {isActive ? (
        <li>{text}</li>
      ) : (
        <li>
          <NavLink to={resolvedLocation.pathname}>{text}</NavLink>
        </li>
      )}
      <Outlet />
    </>
  );
};
