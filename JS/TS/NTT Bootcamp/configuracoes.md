## INSTALL TYPESCRIPT
npm init -y :cria um prjeto de node
npm install typescript -D :cria uma dependencia de Dev

## TS CONFIG
rootDir : colocar o caminho onde ficará os arquivos TS
outDir : especifica pasta de saida

## COMANDOS
### no site do typescript Playground/TS Config é possivel visualizar melhor cada função denro do tsconfig
npx tsc: lê o arquivo tsconfig, caso exista
npx tsc [caminho do script typescript]: traduz o conteudo do typescript para javascript
node [caminho do script javascript]: lê o script 

## PACKAGE JSON
Em script é possivel criar comandos novos, caso queira fazer um comando com outros dois comandos já criados é possivel.
Exemplo: 
"scripts": {
    "start": "npx tsc && node/build/index.js"
}
no console : npm run start (nome do comando)

## PULO DO GATO
npm install ts-node-dev -D
"scripts": {
    "start": "npx tsc && node/build/index.js"
    "start:dev": "ts-node-dev --respawn --transpile-only src/index.js",
}
no console : npm run start:dev (nome do comando)
