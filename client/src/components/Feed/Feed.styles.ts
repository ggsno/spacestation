import Slider from "react-slick";
import styled from "styled-components";
import { FaRegComment } from "react-icons/fa6";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  // margin-bottom: 3rem;
  padding-bottom: 2rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CustomSlider = styled(Slider)`
  margin-bottom: 2rem;
  & .slick-dots li {
    margin: 0;
    width: 0.875rem;
  }
`;

export const CustomSliderNextArrow = styled.button`
  right: 1rem;
`;

export const CustomSliderPrevArrow = styled.button`
  left: 1rem;
  z-index: 1;
`;

export const ImageSquareFrame = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
  flex-shrink: 0;

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;

    user-select: none;
    -webkit-user-drag: none;
    transition: transform 0.5s;
  }
`;

export const TextContainer = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 20px;
  overflow: hidden;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-all;
  padding: 8px 15px;
  font-size: ${({ theme }) => theme.size.md}px;
  & a {
    color: ${({ theme }) => theme.colors.sub};
  }
`;

export const MoreReadButton = styled.button`
  font-family: inherit;
  font-size: ${({ theme }) => theme.size.md}px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textDisable};
  border: 0;
  padding: 0;
  line-height: 14px;
`;

export const GridFeedItem = styled.div<{ $column: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $column }) => $column}, 1fr);
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const CommentContainer = styled(FaRegComment)`
  cursor: pointer;
  width: 28px;
  height: 28px;
  margin-right: 10px;
  overflow-y: auto;
  margin-bottom: 1px;
  color: ${({ theme }) => theme.colors.main};
`;

export const ButtonContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const ButtonLeftDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ButtonRightDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
