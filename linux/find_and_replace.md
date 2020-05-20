# Find and Replace Strings Within Files on *nix


### Example scripts to find all .css files within a directory and change the text string OLD to NEW within the files. -i flag updates the original file with the changes. Omit that to log the changes or pipe them to a new file.
```sh
for file in *.css
do
sed -i 's/OLD/NEW/g' "$file"
done
```
