import { recentPosts } from "./bd.js";

const main = document.querySelector('#main');
const url = document.location.href;
const pageTitle = document.querySelector('#page-title');
let conteudo = []
let current = 0
let cont = 0
let tema = url.split('?')[1]

switch (tema){
    case 'lendas-romanas':
        pageTitle.innerHTML = 'Lendas Romanas'
        break
    case 'batalhas-lendarias':
        pageTitle.innerHTML = 'Batalhas Lendárias'
        break
    case 'governos-romanos':
        pageTitle.innerHTML = 'Governos Romanos'
        break
}

for (current in recentPosts){
    for (cont in recentPosts[current].temas){
        if (recentPosts[current].temas[cont].includes(`${tema}`)){
            conteudo += `
                <div class="blog-item">
                    <div class="blog-img">
                        <img src="${recentPosts[current].img1}" alt="${recentPosts[current].altText}">
                    </div>
                    <div class="blog-text">
                        <span class="Card-data">${recentPosts[current].data}</span>
                        <h2 class="Card-title">${recentPosts[current].titulo}</h2>
                        <p class="Card-subtitle">${recentPosts[current].subtitulo}</p>
                        <a href="${recentPosts[current].link}" class="button">Acessar</a>
                    </div>
                </div>
            `
        }
    }
}
main.innerHTML = conteudo;