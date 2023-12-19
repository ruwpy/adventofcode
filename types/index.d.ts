type TPuzzles = {
  [key in TPuzzleDays]?: {
    [key in TPuzzlesPartNames]?: () => any;
  };
};
type TPuzzleDays = "dayOne" | "dayTwo" | "dayThree";
type TPuzzlesPartNames = "partOne" | "partTwo";
