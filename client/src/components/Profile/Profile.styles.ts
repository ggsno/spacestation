import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: grid;
  place-items: center;
  gap: 20px;
  font-size: ${({ theme }) => theme.size.md}px;
  max-width: calc(${({ theme }) => theme.size.maxWidth}px - 10px);
  .profileContainer {
    display: flex;
    gap: 30px;
    align-items: center;
    height: 140px;
    justify-content: center;
    box-sizing: border;
  }
`;

export const ProfileImg = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 70%;
  padding: 10px;
`;

export const Follow = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Following = styled.li`
  display: grid;
  padding: 20px;
  gap: 10px;
  text-align: center;
  font-size: ${({ theme }) => theme.size.rg}px;
  span {
    font-size: ${({ theme }) => theme.size.lg}px;
    font-weight: bold;
  }
`;
export const Button = styled.input`
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 5px;
  width: 100%;
  item-align: center;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  border-radius: 3px;
  span {
    font-size: ${({ theme }) => theme.size.lg}px;
  }
`;

export const Upload = styled.div`
  color: ${({ theme }) => theme.colors.main};
  position: absolute;
  font-weight: bold;
  top: 20px;
  right: 20px;
`;

export const UpdateInput = styled.input`
  padding: 10px;
  box-sizing: border-box;
  items-align: center;
  text-align: center;
  justify-content: center;
`;