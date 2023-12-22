pub fn trebuchet(input: &str) -> String {
    let result: u32 = input
        .split("\r\n")
        .map(|line| {
            let mut it = line.chars().filter_map(|ch| ch.to_digit(10));

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

#[cfg(test)]

mod tests {
    use super::*;

    #[test]
    fn test_process() -> miette::Result<()> {
        let input = "1abc2\r\n
        pqr3stu8vwx\r\n
        a1b2c3d4e5f\r\n
        treb7uchet";

        assert_eq!("142", trebuchet(input));
        Ok(())
    }
}
