use std::io;

use crate::parse_txt::parse_txt;
use crate::puzzles::day_one;

mod parse_txt;
mod puzzles;

fn main() -> io::Result<()> {
    let input = parse_txt("src/puzzles/day_one/input.txt")?;

    let result = day_one::part_one::trebuchet(&input);
    println!("{}", result);

    Ok(())
}
