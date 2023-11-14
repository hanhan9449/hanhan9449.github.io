function inter1() {
    # interlace=(identify -quiet -format '%[interlace]' $1)
    # echo $interlace
    echo $1
    # if []
}
# find ../docs/public/ -iname *.png | xargs -0  -I {} bash -c 'interlaceIt "{}"'
inter1 hi
# convert -interlace plane -quality 80 {} {}

find ../docs/public/ -iname '*.png' -exec convert -interlace plane -quality 80 {} {} \;