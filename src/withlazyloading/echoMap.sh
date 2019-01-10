#!/bin/sh
cp=$PWD
imp="{"
for i in `seq 1 100`
do
    imp="$imp\n$i: TestComponent$i,"
done

imp="$imp\n}"
echo $imp | xclip -sel clip