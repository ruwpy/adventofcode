use std::{
    fs::File,
    io::{BufReader, Read, Result},
};

pub fn parse_txt(path: &str) -> Result<String> {
    let file = File::open(path)?;

    let mut input = String::new();

    let mut file_reader = BufReader::new(file);
    file_reader.read_to_string(&mut input)?;

    Ok(input)
}
