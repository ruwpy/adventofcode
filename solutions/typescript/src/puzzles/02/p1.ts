type TCubeColors = "red" | "green" | "blue";

const isGamePossible = (input: string) => {
  const possibleCubes = { r: 12, g: 13, b: 14 };
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

  const isPossible =
    possibleCubes.r >= cubes.red &&
    possibleCubes.g >= cubes.green &&
    possibleCubes.b >= cubes.blue;

  return { gameId: parseInt(gameId.split(" ")[1], 10), isPossible };
};

export const cubeConundurumPartOne = (input: string[]) => {
  let result = 0;

  input.map((game) => {
    const { gameId, isPossible } = isGamePossible(game);

    if (isPossible) result += gameId;
  });

  return result;
};
