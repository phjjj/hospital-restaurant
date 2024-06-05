import styled from "styled-components";
import { Department } from "../pages/Select";
import Button from "./common/Button";

interface Props {
  department: Department;
  onSelect: (id: number) => void;
  selected: number;
}

function DepartmentItem({ department, onSelect, selected }: Props) {
  const handleClick = () => {
    onSelect(department.id);
  };

  return (
    <DepartmentItemStyle onClick={handleClick} schema={selected === department.id ? "primary" : "third"} size="small">
      {department.name}
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
