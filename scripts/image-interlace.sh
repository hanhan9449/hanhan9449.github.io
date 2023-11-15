title="将 jpg、png 等格式的图片优化为交错后的图片"
echo "$title start"
count=0
for i in $(find ../docs/public/ -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg') ; do
interlace=$(identify -quiet -format "%[interlace]" $i)
if [[ "$interlace" == "PNG" ]] || [[ "$interlace" == "JPEG" ]]; then
  echo "$i 已交错，continue..."
    continue
fi
convert -interlace plane -quality 80 "$i" "$i";
count=$((count + 1))
echo "$i 交错完成✅"
done
echo "🌈🌈本次共新增 $count 个图片"
echo "$title end"
