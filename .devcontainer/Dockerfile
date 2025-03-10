# Imagen base de Node.js 22.14
FROM node:22.14

# Crear usuario no root para evitar permisos de root
RUN useradd -m nodeuser

# Establecer usuario y directorio de trabajo
USER nodeuser
WORKDIR /workspace

# Instalar dependencias
COPY ../../package.json ../../package-lock.json* ./

RUN npm install || true

# Exponer el puerto 3000
EXPOSE 3000

CMD ["npm", "start"]

