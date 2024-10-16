import styled from "styled-components";
import { Department } from "../../select/page";
import Button from "../common/Button";

interface Props {
  department: Department;
  onSelect: (department: Department) => void;
  selected?: number;
}

function DepartmentItem({ department, onSelect, selected }: Props) {
  const handleClick = () => {
    onSelect(department);
  };

  return (
    <DepartmentItemStyle
      onClick={handleClick}
      schema={selected === department.id ? "primary" : "third"}
      size='small'>
      {department.yadmNm}
    </DepartmentItemStyle>
  );
}

const DepartmentItemStyle = styled(Button)`
  width: 120px;
  padding: 20px 20px;
  font-size: ${({ theme }) => theme.button.medium.fontSize};
  font-weight: 600;

  &:hover {
    transition: 0.3s;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

export default DepartmentItem;
