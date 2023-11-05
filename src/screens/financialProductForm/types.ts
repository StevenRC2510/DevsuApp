export type FormValues = {
  id: string;
  name: string;
  description: string;
  logo: string;
  releaseDate: string;
  revisionDate: string;
};

export type InputFields = {
  label: string;
  name: keyof FormValues;
  type?: 'text' | 'date';
};
