# 🚀 Guide complet : Projet TypeScript avec Webpack


---

## 1️⃣ Créer le dossier du projet

```bash
mkdir ts-webpack-project
cd ts-webpack-project
```

---

## 2️⃣ Initialiser le projet Node.js

```bash
npm init -y
```

---

## 3️⃣ Installer les dépendances

### Dépendances de production
```bash
npm install --save-dev webpack webpack-cli webpack-dev-server ts-loader typescript
```

---

## 4️⃣ Créer l’arborescence

```text
ts-webpack-project/
 ├─ src/
 │   ├─ index.ts
 │   └─ utils.ts
 ├─ public/
 │   └─ index.html
 ├─ dist/             ← généré par Webpack
 ├─ package.json
 ├─ tsconfig.json
 └─ webpack.config.js
```

---

## 5️⃣ Configurer TypeScript

**tsconfig.json**
```jsonc
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src"]
}
```

---

## 6️⃣ Configurer Webpack

**webpack.config.js**
```js
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public")
    },
    port: 8080,
    hot: false,
    open: true,
    devMiddleware: {
       writeToDisk: true
    }
  }
};
```

---

## 7️⃣ Créer des fichiers TypeScript d’exemple

**src/utils.ts**
```ts
export function greet(name: string): string {
  return `Bonjour ${name} 👋`;
}
```

**src/index.ts**
```ts
import { greet } from "./utils";

console.log(greet("Alice"));
```

---

## 8️⃣ Créer le HTML

**public/index.html**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>TS + Webpack</title>
</head>
<body>
  <h1>Hello TypeScript + Webpack</h1>
  <script src="bundle.js"></script>
</body>
</html>
```

---

## 9️⃣ Ajouter les scripts npm

Dans `package.json`, ajoute sous `"scripts"` :
```json
"scripts": {
  "build": "webpack",
  "dev": "webpack serve --open"
}
```

---

## 1️⃣0️⃣ Compiler et lancer

- Pour compiler une fois :
```bash
npm run build
```

- Pour le mode développement avec recompilation automatique et serveur :
```bash
npm run dev
```

Ouvre ton navigateur → Webpack Dev Server servira ton projet sur `http://localhost:8080/`.

---

## ✅ Résultat

- Tous les fichiers TS sont compilés dans **un seul bundle** (`dist/bundle.js`)
- Tu peux utiliser **import/export** sans problème
- Compilation automatique à chaque modification avec `npm run dev`

---