import Navbar from "@/components/Navbar/Navbar";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const StylesdLayout = styled.div`
  max-width: ${({ theme }) => theme.size.maxWidth}px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
`;

const Layout = () => {
  return (
    <>
      <StylesdLayout>
        <Outlet />
      </StylesdLayout>

      <Navbar />
    </>
  );
};

export default Layout;
