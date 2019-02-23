#!/bin/bash

declare -a ENTRIES

# quire site
# IFS=$'\r\n' GLOBIGNORE='*' command eval 'ENTRIES=($(cat site/pdf-script.txt))'

# preview needs to be running, so better to get the script text from localhost
IFS=$'\r\n' GLOBIGNORE='*' command eval 'ENTRIES=($(curl http://localhost:1313/pdf-script.txt))'

for i in "${ENTRIES[@]}"
do
  prince $i --style=bin/page-pdfs.css --no-warn-css
done


