type Classe = string | false | null | undefined;

/** Junta classes condicionais sem trazer dependência para o bundle. */
export const cn = (...classes: Classe[]) =>
  classes.filter(Boolean).join(" ");
