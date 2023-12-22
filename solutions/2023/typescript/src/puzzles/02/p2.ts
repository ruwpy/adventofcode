type TCubeColors = "red" | "green" | "blue";

const maximumCubes = (input: string) => {
  const cubes = { red: 0, green: 0, blue: 0 };

  const [gameId, sets] = input.split(":");

  sets.split(";").map((set) => {
    set.split(",").map((cubeType) => {
      const [number, color] = cubeType.trim().split(" ");

      const parsedNum = parseInt(number, 10);

      const cubeColor = color as TCubeColors;

      if (cubes[cubeColor] <= parsedNum) {
        cubes[cubeColor] = parsedNum;
      }
    });
  });

  return { ...cubes };
};

export const cubeConundurumPartTwo = (input: string[]) => {
  let result = 0;

  input.map((game) => {
    const { red, green, blue } = maximumCubes(game);

    result += red * (green * blue);
  });

  return result;
};
