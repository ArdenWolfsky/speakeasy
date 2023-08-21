Set-Location -Path "C:\Users\hyperdefined\Desktop\ardenwolfsky.com\"
git pull
Remove-Item -Path "_site" -Recurse -Force
Remove-Item -Path "tag" -Recurse -Force
python3 scripts/generate_tags.py
bundle exec jekyll build