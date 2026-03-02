# Publicar o portefólio no GitHub Pages

## O site não abre / fica em branco – o que verificar

### 1. Source do GitHub Pages tem de ser **GitHub Actions**

- Repositório no GitHub → **Settings** → **Pages**
- Em **Build and deployment**, no campo **Source** tem de estar: **GitHub Actions**  
  Se estiver "Deploy from a branch", o site usa a branch (código fonte) e não o build, e fica em branco ou com 404.

### 2. O workflow tem de ter corrido com sucesso

- Repositório → **Actions**
- Abre o workflow **"Deploy to GitHub Pages"**
- O último run deve estar com um **tick verde**
- Se estiver vermelho, clica e vê em que step falhou (por exemplo "Install dependencies" ou "Build")

### 3. Branch correta

O workflow corre quando fazes push para **main** ou **master**.  
Se a tua branch principal tiver outro nome, diz qual é para ajustar o workflow.

### 4. URL correta

O site fica em: **https://&lt;teu-username-do-github&gt;.github.io/Portefolio/**  
(Substitui pelo teu username e confirma que o repositório se chama exatamente **Portefolio**.)

---

## Resumo dos passos

1. **Settings** → **Pages** → **Source** = **GitHub Actions**
2. Fazer **push** da branch `main` (ou `master`) com o código atual
3. Ir a **Actions** e confirmar que o workflow **Deploy to GitHub Pages** correu com sucesso (verde)
4. Abrir **https://&lt;username&gt;.github.io/Portefolio/**

---

## CV em produção

O CV deve estar em `public/` com o nome `cv.pdf` (por exemplo `public/CV_Miguel_Rodrigues.pdf` copiado para `public/cv.pdf`). Quem faz o build (local ou no Actions) usa essa pasta; o botão "Descarregar CV" no site aponta para esse ficheiro.
