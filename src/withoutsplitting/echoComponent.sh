#!/bin/sh
cp=$PWD
imp=""
for i in `seq 1 100`
do
    imp="$imp\nimport TestComponent$i from '../components/TestComponent$i'"
done

echo $imp | xclip -sel clip