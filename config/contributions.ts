export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "urlshortner",
    contibutionDescription:
      "Provides the backend for a URL shortener service, allowing users to shorten long URLs.",
    repoOwner: "Aditya",
    link: "https://github.com/adityasaxena-crypto/urlshortner",
  },
  {
    repo: "SST-flask",
    contibutionDescription:
      "Sea surface temperature prediction using SST data and machine learning models like XGBboost, RandomForest.",
    repoOwner: "Aditya",
    link: "https://github.com/adityasaxena-crypto/SST-flask",
  },
  {
    repo: "SST-Prediction",
    contibutionDescription:
      "SeaNet: A Deep Learning Architecture for Enhanced Sea Surface Temperature Forecasting.",
    repoOwner: "IEEE",
    link: "https://ieeexplore.ieee.org/abstract/document/10420923",
  },
  {
    repo: "SST-Prediction using LSTM",
    contibutionDescription:
      "Time Series Prediction of Sea Surface Temperature Using LSTM",
    repoOwner: "IEEE",
    link: "https://ieeexplore.ieee.org/document/10048855",
  },
  {
    repo: "IEEE",
    contibutionDescription:
      "Published research on DNA-based data storage for portable and error-free information retrieval.",
    repoOwner: "IEEE",
    link: "https://doi.org/10.1109/RDCAPE52977.2021.9633694",
  },
  {
    repo: "River Publications",
    contibutionDescription:
      "Co-authored a research paper on AI-based improved accuracy model for Edge Computing and IoT.",
    repoOwner: "River Publications",
    link: "#",
  },
  {
    repo: "IGI Global",
    contibutionDescription:
      "Analyzed the impact of Industrial Automation and AI on supply chains in a published study.",
    repoOwner: "IGI Global",
    link: "#",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
