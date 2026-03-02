# Publicar o portefólio no GitHub Pages

## Porque é que a página ficava em branco / 404?

O servidor estava a servir o **código fonte** (o `index.html` da raiz, que pede `/src/main.jsx`). No GitHub Pages esse ficheiro não existe no sítio certo, por isso dá 404 e a página fica em branco.

A solução é publicar **só a pasta `dist`** (o resultado de `npm run build`), onde o `index.html` já tem os scripts e assets corretos.

---

## Opção 1: Deploy automático com GitHub Actions (recomendado)

1. **Ativa o GitHub Pages no repositório**
   - No GitHub: **Settings** → **Pages**
   - Em **Build and deployment**, **Source**: escolhe **GitHub Actions**

2. **Faz push do projeto** (incluindo a pasta `.github/workflows/`)
   - O workflow `Deploy to GitHub Pages` corre em cada push à branch `main`
   - Ele faz `npm run build` e publica a pasta `dist`

3. **O site fica em:**  
   `https://<teu-username>.github.io/Portefolio/`  
   (Se o repositório tiver outro nome, muda `base` em `vite.config.js` para `'/nome-do-repo/'`.)

---

## Opção 2: Deploy manual

1. No teu PC:
   ```bash
   npm run build
   ```
2. A pasta `dist/` fica com o site pronto. Sobe **só o conteúdo de `dist/`** para a branch ou pasta que o GitHub Pages usa (por exemplo para a raiz da branch `gh-pages`).

---

## CV em produção

Para o botão "Descarregar CV" funcionar no site publicado, o ficheiro do CV tem de estar em `public/` antes do build:

```bash
cp src/assets/CV_Luis_Rodrigues.pdf public/cv.pdf
```

Depois volta a fazer `npm run build` (e novo deploy, se for manual).
