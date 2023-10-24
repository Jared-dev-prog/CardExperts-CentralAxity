export interface ICardExpertsCentralAxityProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  absoluteUrl: string;
}

export interface IExpertProps {
  NumberStarts: string;
  SoftSkills: string;
  TechnicalSkills: string;
  description: string;
  email: string;
  name: string;
  photo: string;
  position: string;
  yearsExperience: number;
  Expeciality: string;
}

export interface IExpert extends IExpertProps {
  Id: number;
}
