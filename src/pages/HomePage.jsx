import { Outlet } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Outlet />
    </div>
  );
};
