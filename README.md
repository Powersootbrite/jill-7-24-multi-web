echo "# jill-multi-page-wabhgfbcfntensjmtgzsazrsettykthk" >> README.md
git init
git add README.md
git config user.name ""
git config user.email ""

git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Powersootbrite/jill-multi-page-wabhgfbcfntensjmtgzsazrsettykthk.git
gh auth login
git push -u origin main


//create a save point and attach memo to it
git commit -m

//view the value of origin
git remote -v

//CHANGE THE VALUE OF ORIGIN
git remote set-url origin https://github.com/Powersootbrite/jill-multi-page-wabhgfbcfntensjmtgzsazrsettykthk.git

//Initiate source control
git init

//RENAMES CURRENT BRANCH TO MAIN
git branch -M main

git add .
git commit -m
git push

//PUSHES CHANGES TO THE ORIGINS MAIN BRANCH AND SAVES PARAMETERS
git push -u origin main
