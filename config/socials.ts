import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@adityasaxena-crypto",
    icon: Icons.gitHub,
    link: "https://github.com/adityasaxena-crypto",
  },
  {
    name: "LinkedIn",
    username: "Aditya Saxena",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/aditya-saxena-002878268/",
  },
  {
    name: "Gmail",
    username: "adityaarchie1234",
    icon: Icons.gmail,
    link: "mailto:adityaarchie1234@gmail.com",
  },
];
