echo "# jill-7-24-multi-web" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Powersootbrite/jill-7-24-multi-web.git
curl -sS https://webi.sh/gh | sh	
gh auth login
git push -u origin main