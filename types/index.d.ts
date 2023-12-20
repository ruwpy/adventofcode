type TPuzzles = {
  [key in TPuzzleDays]?: {
    name: string;
    solutions: {
      [key in TPuzzlesPartNames]?: (input: string[]) => any;
    };
  };
};
type TPuzzleDays = "01" | "02" | "03";
type TPuzzlesPartNames = "p1" | "p2";
