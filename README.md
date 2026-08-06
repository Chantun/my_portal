# my_portal

Portal estático que lista los subdominios de **sdmn.dev**. Para cada subdominio muestra una breve descripción, el hosting actual donde está desplegado y el enlace a su repositorio de GitHub.

## Subdominios

| Subdominio          | Host   | Descripción                                                               |
| ------------------- | ------ | ------------------------------------------------------------------------- |
| sdmn.dev            | Render | Dominio principal, esta misma página portal.                              |
| calendario.sdmn.dev | Oracle | Calendario académico que guarda materias, horarios y eventos importantes. |
| clock.sdmn.dev      | Render | Un reloj digital hecho a partir de muchos relojes analógicos.             |
| todo.sdmn.dev       | Oracle | Página de ToDo con inicio de sesión persistente.                          |

Los subdominios se cargan desde `src/data.json`, por lo que se pueden agregar o modificar entradas editando ese archivo.

## Tecnologías

- [React](https://react.dev)
- [Vite](https://vite.dev)

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar la compilación
npm run preview

# Ejecutar el linter
npm run lint
```

## Estructura

```
├── public/
├── src/
│   ├── modules/
│   │   ├── Header.jsx
│   │   └── Subdomain.jsx
│   ├── style/
│   ├── App.jsx
│   ├── data.json
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Licencia

Ver [LICENSE](LICENSE).
