
export interface CaseData {
  title: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
  };
  layout: 'standard' | 'sidebar' | 'grid';
}
