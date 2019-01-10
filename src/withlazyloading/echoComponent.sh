#!/bin/sh
cp=$PWD
imp=""
for i in `seq 1 100`
do
    imp="$imp\nconst TestComponent$i = React.lazy(() => import('../components/TestComponent$i'));"
done

echo $imp | xclip -sel clip