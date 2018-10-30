# Terminal

- `~` home
- `pwd` presetn working directory
    - treats symlinked paths like actual paths
    - `pwd -P` to see the actual physical path
- `ls` list files and directories
    - `ls -a` all files including visible and hidden
    - `ls -l` detailed view
        - file mode, number of links, owner name, group name, bytes in file,
        abbreviated month, day-of-month last modified, hour last modified, minute last modified, pathname
    - `ls -lh` shows file size in human readable format
    - `ls -lhS` sort by size
    - `ls -lt` sort by last modified time
    - `ls -lr` reverse sort
- `cd /directory` change directory
    - `cd ..` move up
    - `cd` go home
- `mkdir foo` make directory
    - `mkdir -p foo/bar/baz` make nested directories
    - `mkdir -v a` verbose mode, useful for reporting
- `cp a.txt b.txt` copy a to b
    - `cp a.txt b.txt foo` copy a and b to foo directory
    - `cp *.txt foo` copy all txt files to foo directory
    - `cp -v a.txt b.txt` verbose
    - `cp -R foo bar` copy contents of foo directory to bar directory
    - `cp -f a.txt b.txt` force permissions
    - `cp -i a.txt b.txt` confirm overwrite
- `rm a.txt` delete file
- `mv a.txt b.txt` rename a to b
    - `cp a.txt b.txt; rm a.txt` same as above
- `ls -a ~ | grep _` pipe the home directory to grep, and find matches for underscore
- `ls -a ~ | grep _ > underscores.txt` writes the operation to file
    - `<` reads from file

## Links

- `ln` create a link between two files
    - Default is a hard link
    - Hard links create an identical copy of the linked file, and updates automatically
    - `ln sourceFile.txt linkedFile.txt`
    - These only work on the current file system
    - Removing the source doesn't remove the linked file
- `ln -f a.txt b.txt` is `a.txt` already exists
- `ln -s` symbolic link
    - `ln -s a.txt b.txt`

