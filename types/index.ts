export type LinkProps = {
  href: string;
  label: string;
};

export type SolutionProps = {
  name: string;
  description: string;
  comingSoon?: boolean;
  href?: string;
  image: string;
};

export type TeamMemberProps = {
  name: string;
  image: string;
};

export type ContactInfoProps =LinkProps & {
  description: string;
  icon: string;
  color: string;
};
