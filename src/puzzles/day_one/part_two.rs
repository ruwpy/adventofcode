pub fn trebuchet(input: &str) -> String {
    let result: u32 = input
        .split("\r\n")
        .map(|line| {
            let processed_line = process_line(line);

            let mut it = processed_line.chars().filter_map(|ch| ch.to_digit(10));

            let first = it.next().expect("Should be a number");

            match it.last() {
                Some(num) => format!("{}{}", first, num),
                None => format!("{}{}", first, first),
            }
            .parse::<u32>()
            .expect("Should be a number")
        })
        .sum();

    result.to_string()
}

fn process_line(line: &str) -> String {
    line.replace("one", "o1e")
        .replace("two", "t2o")
        .replace("three", "t3e")
        .replace("four", "f4r")
        .replace("five", "f5e")
        .replace("six", "s6x")
        .replace("seven", "s7n")
        .replace("eight", "e8t")
        .replace("nine", "n9e")
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_process() -> miette::Result<()> {
        let input = "two1nine\r\n
        eightwothree\r\n
        abcone2threexyz\r\n
        xtwone3four\r\n
        4nineeightseven2\r\n
        zoneight234\r\n
        7pqrstsixteen";

        assert_eq!("281", trebuchet(input));
        Ok(())
    }
}
