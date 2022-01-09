// informações dos membros
const membros = [
  {
    id: 0,
    nome: 'Kim Namjoon - RM',
    posicao: 'Cantor / Líder',
    img: 'https://64.media.tumblr.com/4e07cca1b5b34c31dda00e8170beb05f/tumblr_pbsvhsCahU1wr7qblo2_1280.jpg',
    texto: 
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, suscipit et architecto rem dolorem perspiciatis? Iusto explicabo tempore libero ipsum!',
  }, 
  {
    id: 1,
    nome: 'Kim Seokjin - Seokjin',
    posicao: 'Cantor',
    img: 'https://64.media.tumblr.com/8bb5b83f6a59007a636aaad38d235628/tumblr_pbsvhsCahU1wr7qblo3_1280.jpg',
    texto: 
    'Natus ut reiciendis quos inventore impedit nisi nihil, fugit, consectetur tempora quidem error et minus itaque, dolores saepe autem ipsa provident alias? Id cumque numquam at culpa perspiciatis. Aspernatur sed, alias animi ratione cupiditate nostrum voluptas illo? Maxime eligendi vitae at ea.',
  }, 
  {
    id: 2,
    nome: 'Min Yoongi - Suga',
    posicao: 'Rapper',
    img: 'https://64.media.tumblr.com/9d044aca41d3625011a4f9569c2bc339/tumblr_pbsvhsCahU1wr7qblo8_1280.jpg',
    texto: 
    'Dolores exercitationem impedit doloribus iure odio cum, voluptatum corporis ipsam saepe quod repellat in rem aliquid voluptatibus! Nesciunt maxime neque error ex odio, ab facilis saepe eos, laboriosam voluptas eum inventore facere ducimus vitae veniam repellendus fuga atque consequuntur ipsam deserunt voluptates similique pariatur?',
  },
  {
    id: 3,
    nome: 'Jung Hoseok - J-Hope',
    posicao: 'Rapper',
    img: 'https://64.media.tumblr.com/7fe860caaf6a5a1c8fd878b9d37368ef/tumblr_pbsvhsCahU1wr7qblo4_1280.jpg',
    texto: 
    'Velit voluptatem itaque quod facilis quia porro distinctio aperiam, quae, cum veritatis quibusdam iusto repellendus nam! Aliquid eius quis debitis enim, rem accusantium nobis. Nostrum nisi eum, ipsa labore eligendi consequuntur aspernatur nam adipisci, asperiores quis alias delectus nemo!',
  },
  {
    id: 4,
    nome: 'Park Jimin - Jimin',
    posicao: 'Cantor',
    img: 'https://64.media.tumblr.com/0c10eb246dd9525db94d19ffa7bebbb7/tumblr_pbsvhsCahU1wr7qblo5_1280.jpg',
    texto: 
    'Quas cumque, qui quis, beatae inventore totam necessitatibus esse sint tempore optio soluta quam facere voluptatum quasi id perspiciatis at odit suscipit cum explicabo iste. Quia, alias consectetur natus quasi beatae atque inventore blanditiis, iste, sequi dolorem non necessitatibus saepe. Quod officia hic dignissimos deleniti quidem sunt ratione, illo, maxime dolorum veniam quis, consectetur voluptates minus quos.',
  },
  {
    id: 5,
    nome: 'Kim Taehyung - V',
    posicao: 'Cantor',
    img: 'https://64.media.tumblr.com/e05f2efa91dd4c75782c614adb975c1e/tumblr_pbsvhsCahU1wr7qblo7_1280.jpg',
    texto: 
    'Exercitationem, velit. Libero sit officia ipsa iste? Sint aspernatur, velit dignissimos accusamus vitae praesentium porro reiciendis similique beatae ex corporis consectetur iste, ullam illo dolores veniam recusandae quis, dolorem numquam id dolore!',
  },
  {
    id: 6,
    nome: 'Jeon Jungkook - Jungkook',
    posicao: 'Cantor',
    img: 'https://64.media.tumblr.com/13c51981cae6920e2e943a3f045fc298/tumblr_pbsvhsCahU1wr7qblo6_1280.jpg',
    texto: 
    'Distinctio enim nesciunt nostrum commodi atque alias illum at quis soluta officia ipsam, itaque, quo veniam illo harum non repellat omnis provident eius, modi voluptate? Alias rem error, impedit, cupiditate libero quidem quae ad ipsa provident, rerum eveniet consectetur incidunt laudantium labore voluptatum aspernatur voluptate quo amet est dignissimos. Laudantium, consectetur doloribus.',
  },
];

// elemementos do dom selecionados
const img = document.querySelector('#membro-img')
const nome = document.querySelector('#membro-nome')
const posic = document.querySelector('#posic')
const info = document.querySelector('#info')

// botões
const antBtn = document.querySelector('.ant-btn')
const proxBtn = document.querySelector('.prox-btn')

let itemAtual = 0;

// carrega o item atual, mas não carrega o item criado no html
/*
window.addEventListener('DOMContentLoaded', () => {
  const item = membros[itemAtual]
  img.src = item.img
  nome.textContent = item.nome
  posic.textContent = item.posicao
  info.textContent = item.texto
});
*/

// mostra o membro atual baseado no item atual
function mostrarMembro(membro) {
  const item = membros[membro]
  img.src = item.img
  nome.textContent = item.nome
  posic.textContent = item.posicao
  info.textContent = item.texto
}

// mostra o membro anterior
antBtn.addEventListener('click', () => {
  itemAtual--
  if (itemAtual < 0) {
    itemAtual = membros.length - 1;
  }
  mostrarMembro(itemAtual);
});

// mostra o próximo membro
proxBtn.addEventListener('click', () => {
  itemAtual++;
  if (itemAtual > membros.length - 1) {
    itemAtual = 0;
  }
  mostrarMembro(itemAtual);
})