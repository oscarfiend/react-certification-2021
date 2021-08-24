import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.headerBackgroundColor};
  color: white;
  padding: 0.8rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 1100;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);
  position: relative;
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const HeaderItemRigth = styled(HeaderItem)`
  justify-content: space-between;
  @media (max-width: 960px) {
    display: none;
  }
`;

export const Toggle = styled.input`
  display: none;

  + label {
    position: relative;
    top: 18px;
    right: 0;
    left: 0;
    display: block;
    width: 70px;
    height: 35px;
    margin: 0 auto;
    transform: translateY(-50%);
    cursor: pointer;
    &:before {
      top: 4px;
      left: 4px;
      width: 27px;
      height: 27px;
      border: 3px solid white;
    }

    &:after {
      top: 0;
      right: 0;
      width: 70px;
      height: 35px;
      border: 3px solid #143240;
    }
    &:before,
    :after {
      content: '';
      position: absolute;
      border-radius: 50px;
      box-sizing: border-box;
      transition: 0.5s ease top, 0.5s ease left, 0.5s ease right, 0.5s ease width,
        0.5s ease height, 0.5s ease border-color;
    }
  }

  &:checked + label:before {
    top: 0;
    left: 0;
    width: 70px;
    height: 35px;
    border-color: #143240;
  }

  &:checked + label:after {
    top: 4px;
    right: 4px;
    width: 27px;
    height: 27px;
    border-color: white;
  }
`;

export const LabelToggle = styled.label`
  cursor: pointer;
  margin-left: 15px;
`;

export const Avatar = styled.img`
  vertical-align: middle;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  left: -50px;
  top: 0px;
  background-color: #f9f9f9;
  color: black;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 0 !important;
  z-index: 1;
  transition: opacity 207ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 138ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropdownContent} {
    display: block;
  }
`;

export const DropdownOption = styled.p`
  margin: 8px 0px;
  text-align: center;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #efefef;
  }
`;
