# Escolha a imagem base
FROM node:20

# Define o diretório de trabalho no container
WORKDIR /usr/src/app

# Copia o package.json e o package-lock.json (ou yarn.lock)
COPY package*.json ./
# Copia o arquivo tsconfig.json
COPY tsconfig.json ./

# Instala as dependências do projeto
RUN npm install

# Copia os arquivos do projeto para o diretório de trabalho
COPY . .

# Compila o projeto TypeScript
RUN npm run build

# Expõe a porta que o Vite utiliza
EXPOSE 4173

# Comando para iniciar a aplicação
CMD ["npm", "run", "preview"]
