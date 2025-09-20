rm -rf docs
cd ./TechX_Website || exit
npm run build
mv ./docs ../docs
