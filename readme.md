# Casa da Mãe Granola

Landing page institucional da **Casa da Mãe Granola**, com foco em:

- contato via WhatsApp;
- localização da loja em Sepetiba;
- divulgação da marca e categorias de produtos naturais;
- acesso ao Instagram.

## Estrutura do projeto

```bash
.
├── index.html
├── robots.txt
├── sitemap.xml
├── local-business.jsonld
├── favicon.ico
├── favicon.svg
├── favicon-96x96.png
├── apple-touch-icon.png
├── site.webmanifest
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── style.css
│   └── responsive.css
├── js/
│   └── main.js
└── assets/
    └── images/
        └── logo.png
```

## Tecnologias

- HTML5
- CSS3
- JavaScript puro

## Como rodar localmente

Basta abrir o arquivo `index.html` no navegador.

Se preferir, rode com uma extensão de servidor local, como **Live Server** no VS Code.

## Arquivos importantes

### `robots.txt`
Arquivo para orientar crawlers sobre o rastreamento do site.

### `sitemap.xml`
Mapa básico do site para indexação.

> **Importante:** substitua `https://www.seu-dominio.com.br` pelo domínio real antes de publicar.

### `local-business.jsonld`
Dados estruturados do tipo `LocalBusiness`/`HealthFoodStore` para ajudar mecanismos de busca a entenderem melhor a loja.

## Como usar o JSON-LD no `index.html`

Cole este trecho dentro do `<head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HealthFoodStore",
  "@id": "https://www.seu-dominio.com.br/#localbusiness",
  "name": "Casa da Mãe Granola",
  "alternateName": "Casa da Mãe Granola - Sempre cabe mais um grão",
  "description": "Loja de produtos naturais, temperos, grãos e itens para o dia a dia em Sepetiba, Rio de Janeiro.",
  "slogan": "Sempre cabe mais um grão",
  "url": "https://www.seu-dominio.com.br/",
  "image": "https://www.seu-dominio.com.br/assets/images/logo.png",
  "telephone": "+55 21 98284-7106",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Estr. São Tarcísio, 854 - loja B",
    "addressLocality": "Rio de Janeiro",
    "addressRegion": "RJ",
    "postalCode": "23530-827",
    "addressCountry": "BR"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Sepetiba"
  },
  "sameAs": [
    "https://www.instagram.com/casamaegranola/"
  ],
  "hasMap": "https://share.google/hAyukfzWMMVyBGpOT"
}
</script>
```

## Contatos da loja

- WhatsApp: `(21) 98284-7106`
- Instagram: `@casamaegranola`
- Endereço: `Estr. São Tarcísio, 854 - loja B - Sepetiba, Rio de Janeiro - RJ, 23530-827`

## Observação

Este projeto foi preparado para ser uma landing page simples, leve e fácil de manter.
