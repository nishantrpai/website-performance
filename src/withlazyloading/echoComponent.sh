#!/bin/sh
cp=$PWD
cmp=""
map="const Map = {"
for i in `seq 1 100`
do
    cmp="$cmp\nconst TestComponent$i = React.lazy(() => import('../components/TestComponent$i'));"
    map="$map\n\t$i: TestComponent$i,"
done

map="$map\n}"

IMPORT="
    import React from 'react';
    $cmp\n\n$map\nexport default Map
"

echo $IMPORT > import.js