import { departments } from "../_constants/departments";

type DepartmentKey = keyof typeof departments;

export const getDepartment = (departmentId: DepartmentKey) => {
  return departments[departmentId];
};
