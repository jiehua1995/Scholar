git add .
read -p "Input your description\n" description
git commit -m "$description"
git push origin
exit