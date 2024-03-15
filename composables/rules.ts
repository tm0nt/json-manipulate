export const useFormRules = () => {
  return {
    ruleRequired: (v: any) => !!v || "Campos obrigatórios",
    rulePassLen: (v: string) =>
      (!!v && v.length >= 6) || "Senha menor que 8 caracteres",
  };
};
