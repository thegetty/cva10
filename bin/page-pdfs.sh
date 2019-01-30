#!/bin/bash

quire site

declare -a ENTRIES

IFS=$'\r\n' GLOBIGNORE='*' command eval 'ENTRIES=($(cat site/pdf-script.txt))'

for i in "${ENTRIES[@]}"
do
  prince $i
done


