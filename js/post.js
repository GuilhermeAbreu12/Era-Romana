import { recentPosts } from "./bd.js";

const body = document.querySelector('body')
let x = 0;
let post;
let postId;

// Função para obter o parâmetro 'id' da URL
function getPostIdFromURL() {
    const url = document.location.href
    // Rodar a url dentro dos links do recentPosts 
    
    for (x in recentPosts){
        if (url.includes(recentPosts[x].link)){
            
            post = recentPosts[x]
            postId = x
        }
    }
    // Se forem iguais, define essa como a principal e roda seus conteúdos
}

// Carregar o conteúdo dinâmico do post
function loadPost() {
    getPostIdFromURL()
    // Verifica se o ID é válido e se existe no array recentPosts
    if (post !== null && recentPosts[postId]) {
        
        let title = document.querySelector('title')
        
        function updateMetaDescription(description) {
            let metaDescription = document.querySelector('meta[name="description"]');
            if (!metaDescription) {
                // Se a meta tag não existir, crie-a
                metaDescription = document.createElement('meta');
                metaDescription.setAttribute('name', 'description');
                document.head.appendChild(metaDescription);
            }
            // Atualiza o conteúdo da descrição
            metaDescription.setAttribute('content', description);
        }
        
        // Exemplo de uso:
        updateMetaDescription(`${post.metaDescription}`);
        

        title.innerText = `${post.title}`

        let postContent = document.getElementById('post-content');
        postContent.innerHTML = `
        <header>
            <div id="filter"></div>
            <p>@eraromana</p>
            <img src="${post.img1}" alt="${post.altText}" id="banner-img-1">
            <img src="${post.img2}" alt="${post.altText}" id="banner-img-2">
            <img src="${post.img3}" alt="${post.altText}" id="banner-img-3">
        </header>
        <div class="head-block">
            <h1 id="title">${post.titulo}</h1>
            <p id="subtitle">${post.subtitulo}</p>
        </div>
        <main>
            <div class="container">
                <div class="introduction-box">
                    <p>${post.introducao}</p>
                </div>
                <div class="text-box">
                    <h2><span class="blue-text">Fato 1:</span>${post.fatosTitulos[0]}</h2>
                    <p>${post.paragrafos[0]}</p>
                </div>
                <div class="text-box">
                    <h2><span class="blue-text">Fato 2:</span>${post.fatosTitulos[1]}</h2>
                    <p>${post.paragrafos[1]}</p>
                </div>
                <div class="text-box">
                    <h2><span class="blue-text">Fato 3:</span>${post.fatosTitulos[2]}</h2>
                    <p>${post.paragrafos[2]}</p>
                </div>
                <div class="text-box">
                    <h2><span class="blue-text">Fato 4:</span>${post.fatosTitulos[3]}</h2>
                    <p>${post.paragrafos[3]}</p>
                </div>
                <div class="text-box">
                    <h2><span class="blue-text">Fato 5:</span>${post.fatosTitulos[4]}</h2>
                    <p>${post.paragrafos[4]}</p>
                </div>
                <div class="text-box">
                    <h2><span class="blue-text">Fato 6:</span>${post.fatosTitulos[5]}</h2>
                    <p>${post.paragrafos[5]}</p>
                </div>
                <div class="text-box">
                    <h2><span class="blue-text">Fato 7:</span>${post.fatosTitulos[6]}</h2>
                    <p>${post.paragrafos[6]}</p>
                </div>
                <div class="text-box">
                    <h2><span class="blue-text">Fato 8:</span>${post.fatosTitulos[7]}</h2>
                    <p>${post.paragrafos[7]}</p>
                </div>
                <div class="text-box">
                    <h2><span class="blue-text">Fato 9:</span>${post.fatosTitulos[8]}</h2>
                    <p>${post.paragrafos[8]}</p>
                </div>
                <div class="text-box">
                    <h2><span class="blue-text">Fato 10:</span>${post.fatosTitulos[9]}</h2>
                    <p>${post.paragrafos[9]}</p>
                </div>
                <div class="text-box" id="text-box-completion">
                    <p>${post.conclusao}</p>
                </div>
                <div class="text-box">
                    <p>Até a próxima, e muito obrigado!</p>
                </div>
                <div class="text-box">
                    <p>– Era Romana –</p>
                </div>
                <a href="index.html#blog" class="btn-voltar">
                    Outros posts
                </a>
            </div>
        </main>
        `;
    } else {
        // Caso o ID não seja válido ou o post não seja encontrado
        document.getElementById('post-content').innerHTML = '<p>Post não encontrado!</p>';
    }
}

// Chama a função para carregar o post ao abrir a página
loadPost();
