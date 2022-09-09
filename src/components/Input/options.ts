export interface ISelectOptions {
  id: string;
  value: string;
}

export const roleOptions = [
  {
    id: "role1",
    value: "Profissional",
  },
  {
    id: "role2",
    value: "Recrutador",
  },
] as ISelectOptions[];

export const statusOptions = [
  {
    id: "stat1",
    value: "Iniciante",
  },
  {
    id: "stat2",
    value: "Intermediário",
  },
  {
    id: "stat3",
    value: "Avançado",
  },
];
