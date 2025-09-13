rm -rf Build
cd ./TechX_Website || exit
npm run build
mv ./dist ../Build
