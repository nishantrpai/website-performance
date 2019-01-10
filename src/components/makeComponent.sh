#!/bin/sh
cp=$PWD
for i in `seq 1 100`
do
    echo "making $i"
    component="TestComponent$i"
    echo "$cp/$component"
    mkdir "$cp/$component"
    cd "$cp/$component"
    touch index.js
    COMPONENTFILE="import React from \"react\";
    \nconst $component = () => (
    \n <p> Hello World!$i</p>
    \n);
    \n\nexport default $component;
    "
    echo $COMPONENTFILE >> index.js
done