#!/bin/sh
cp=$PWD
cmp=""
map="const Map = {"
for i in `seq 1 1000`
do
    cmp="$cmp\nimport TestComponent$i from '../components/TestComponent$i'"
    map="$map\n\t$i: TestComponent$i,"
done

map="$map\n}"

IMPORT="
    $cmp\n\n$map\nexport default Map
"

echo $IMPORT > import.js