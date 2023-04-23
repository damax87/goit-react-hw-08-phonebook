import styled from "styled-components";

export const ContactListCantainer = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
`;


export const ContactListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 40px;
    padding: 10px;
    `;

export const ContactListButton = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: lightseagreen;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: teal;
  }
  &:focus {
    background-color: teal;
  }
`;