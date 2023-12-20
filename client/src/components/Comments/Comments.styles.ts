import styled from "styled-components";

export const Container = styled.div`
  background-color: none;
  font-size: ${({ theme }) => theme.size.md}px;
  width: 99%;
  &:hover {
    background-color: lightgray;
  }
  border: 1px solid gray;

  margin-top: 5px;
  margin-bottom: 5px;
`;

export const DeleteButton = styled.button`
  background-color: red;
  color: white;
  cursor: pointer;
`;

export const CommentWindowContainer = styled.div`
  position: fixed;
  right: 10%;
  top: 20%;
  background-color: gray;
  width: 80%;
  height: 80%;
  max-height: 70vh;
  overflow-y: auto;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;

export const FeedCommentButton = styled.button`
  background-color: black;
  color: white;
  border: 3px solid gray;
  border-radius: 20px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  flex-direction: row
  background-color: transparent;
  color: #262626; 
  align-self: flex-end; 
  cursor: pointer;
  margin: 10px 10px;
  position: fixed;
`;

export const CommentsCollection = styled.div`
  position: relative;
`;

export const InputWrapper = styled.form`
  background-color: none;
  display: flex;
  align-items: center;
  width: 78%;
  height: 240px;

  justify-content: center;

  margin-bottom: 10px;
  position: fixed;
  bottom: 0;
  margin-left: 6px;
`;

export const InputField = styled.input`
  padding: 10px;
  margin-right: 8px;
  border: 1px solid darkgray;
  border-radius: 20px;
  outline: none;
  background-color: gray;
  width: 98%;

  align-item: center;
`;

export const SubmitButton = styled.button`
  padding: 4px;
  width: 50px;
  background-color: #389cd7;
  color: white;
  border: 3px solid #389cd7;
  border-radius: 20px;
  cursor: pointer;
  position: absolute;
  right: 30px;
`;

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;
