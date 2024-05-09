/* eslint-disable react/prop-types */
import { Footer } from "./Footer/Footer";
import { Navegation } from "./Navegation/Navegation";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navegation />
      <div>{children}</div>
      <Footer />
    </div>
  );
};