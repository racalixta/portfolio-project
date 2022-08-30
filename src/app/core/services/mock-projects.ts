import { Project } from "../models/project.model";
import { TECHS } from "./mock-tech-icons";
  /*
  {
    "id": 10,
    "title": "",
    "description": "",
    "linkRepository": "",
    "linkSite": "",
    "image": ["", `${projectImg}`],
    ""techs"": [`${tech.html}`, `${tech.css}`, `${tech.sass}`, `${tech.typescript}`, `${tech.angular}`],
  },
  */
const projectImg = "../../assets/img/projects-img/";
const techIcons = TECHS;

const techIconsLink = {
  html: techIcons[0].html,
  css: techIcons[0].css,
  sass: techIcons[0].sass,
  typescript: techIcons[0].typescript,
  angular: techIcons[0].angular,
  javascript: techIcons[0].javascript,
  bootstrap: techIcons[0].bootstrap,
  react: techIcons[0].react,
  tailwind: techIcons[0].tailwind,
}


export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Pokédex",
    description: "Desafio de criar uma Pokédex que tem como utilização a API PokeAPI  para o fornecimento dos dados. Para a construção desse projeto foi utilizado HTML5, CSS3, SCSS, Typescript e Angular.",
    linkRepository: "https://github.com/racalixta/pokedex-angular",
    linkSite: "https://racalixta.github.io/pokedex-angular/",
    image: ["https://i.imgur.com/JOWKlPr.png", `${projectImg}pokedex.png`],
    icons: [`${techIconsLink.html}`, `${techIconsLink.css}`, `${techIconsLink.sass}`, `${techIconsLink.typescript}`, `${techIconsLink.angular}`],
    techs: ["HTML5", "CSS3", "SASS", "Typescript", "Angular"],
  },
  {
    id: 2,
    title: "Jogo Letreco",
    description: "Desafio de replicar o jogo Letreco, que consiste em descobrir qual é a palavra do dia em um certo número de tentativas. Para o desenvolvimento foi utilizado HTML5, CSS3 e JavaScript.",
    linkRepository: "https://github.com/racalixta/projeto-jogo-letreco",
    linkSite: "https://racalixta.github.io/projeto-jogo-letreco/",
    image: ["https://i.imgur.com/mnmrnu7.jpg", `${projectImg}jogo-letreco.jpg`],
    icons: [`${techIconsLink.html}`, `${techIconsLink.css}`, `${techIconsLink.javascript}`],
    techs: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 3,
    title: "Jogo da Forca",
    description: "Desafio de criar um jogo da forca, com sorteio da palavra-chave automático, por meio de uma lista de plavras feito pelo JavaScript. Para a realização desse projeto foi utilizado HTML5, CSS3 e JavaScript.",
    linkRepository: "https://github.com/racalixta/projeto-forca",
    linkSite: "https://racalixta.github.io/projeto-forca/",
    image: ["https://i.imgur.com/wg8ObZC.jpg", `${projectImg}jogo-forca.jpg`],
    icons: [`${techIconsLink.html}`, `${techIconsLink.css}`, `${techIconsLink.javascript}`],
    techs: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 4,
    title: "Portfólio",
    description: "A ideia foi criar um portfólio que contém uma descrição básica sobre a minha pessoa e onde eu possa colocar todos os meus projetos desenvolvidos. Para a criação foi utilizado HTML5, CSS3, Angular e Bootstrap.",
    linkRepository: "https://github.com/racalixta/portfolio-project",
    linkSite: "https://racalixta.github.io/portfolio-project/",
    image: ["https://i.imgur.com/V4tFEYE.jpg", `${projectImg}portfolio.jpg`],
    icons: [`${techIconsLink.html}`, `${techIconsLink.css}`, `${techIconsLink.angular}`,`${techIconsLink.typescript}`, `${techIconsLink.bootstrap}`],
    techs: ["HTML5", "CSS3", "Angular", "Typescript", "Bootstrap"],
  },
  {
    id: 5,
    title: "Timer Pomodoro",
    description: "Desafio de um Timer Pomodoro, que consiste em um Timer que alterna entre dois ciclos, um de trabalho/ação e um de descanso por uma quantidade de seções, com uma quantidade certa de minutos para cada ciclo, que pode ser escolhido pelo usuário.",
    linkRepository: "https://github.com/racalixta/projeto-timer-pomodoro",
    linkSite: "https://racalixta.github.io/projeto-timer-pomodoro/",
    image: ["https://i.imgur.com/h5AwpV2.png", `${projectImg}pomo1.PNG`],
    icons: [`${techIconsLink.html}`, `${techIconsLink.css}`, `${techIconsLink.javascript}`],
    techs: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 6,
    title: "Mega-Sena",
    description: "Este desafio foi pensado para desenvolver um simulador de sorteio da mega-sena. Para desenvolvido também um botão para alternar o site em o light mode e dark mode. Para a realização foi utilizado HTML5, CSS3 e JavaScript.",
    linkRepository: "https://github.com/racalixta/projeto-megaSena",
    linkSite: "https://racalixta.github.io/projeto-megaSena/",
    image: ["https://i.imgur.com/NK2t9HF.jpg", `${projectImg}mega-sena.jpg`],
    icons: [`${techIconsLink.html}`, `${techIconsLink.css}`, `${techIconsLink.javascript}`],
    techs: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 7,
    title: "iMovi",
    description: "Desafio de criar um landing page responsiva para diversos tamanhos de telas de uma empresa de imóveis. Para a criação foi utilizado HTML5, CSS3 e Bootstrap 5.",
    linkRepository: "https://github.com/racalixta/projeto-imovi",
    linkSite: "https://racalixta.github.io/projeto-imovi/",
    image: ["https://i.imgur.com/HVl0udQ.png", `${projectImg}imovi.PNG`],
    icons: [`${techIconsLink.html}`, `${techIconsLink.css}`, `${techIconsLink.bootstrap}`],
    techs: ["HTML5", "CSS3", "Bootstrap"],
  },
  {
    id: 8,
    title: "Site Android",
    description: "Desafio feito durante o curso de HTML5 e CSS3 do Curso em vídeo, o objetivo era criar um site responsivo sobre a histório do Android. Foi utilizado HTML5 e CSS3.",
    linkRepository: "https://github.com/racalixta/projeto-android",
    linkSite: "https://racalixta.github.io/projeto-android/",
    image: ["https://i.imgur.com/RSyfLUo.jpg", `${projectImg}android.jpg`],
    icons: [`${techIconsLink.html}`, `${techIconsLink.css}`],
    techs: ["HTML5", "CSS3"],
  },
  {
    id: 9,
    title: "Formulário de Cadastro",
    description: "Desafio de criar um formulário de cadastro que fosse responsivo à diversos tamanhos de telas. Para não ser apenas um HTML e CSS estático, desenvolvi uma pequena validação em JavaScript do formulário.",
    linkRepository: "https://github.com/racalixta/projeto-formulario-cadastro",
    linkSite: "https://racalixta.github.io/projeto-formulario-cadastro/",
    image: ["https://i.imgur.com/oOlJ3xM.png", `${projectImg}form-cadastro.PNG`],
    icons: [`${techIconsLink.html}`, `${techIconsLink.css}`, `${techIconsLink.javascript}`],
    techs: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 10,
    title: "Controle Financeiro",
    description: "Projeto com ideia de criar um sistema de controle de finanças. Para a construção do projeto foi utilizado ReactJS junto com Typescript, Styled Components, HTML e CSS. Para o deploy do aplicativo foi utilizado o Vercel.",
    linkRepository: "https://github.com/racalixta/expense-tracker",
    linkSite: "https://expense-tracker-alpha-one.vercel.app/",
    image: ["", `${projectImg}sistema-financeiro.png`],
    icons: [`${techIconsLink.html}`, `${techIconsLink.css}`, `${techIconsLink.react}`, `${techIconsLink.typescript}`],
    techs: ["HTML5", "CSS3", "React", "Typescript" ],
  },
  {
    id: 11,
    title: "Clima",
    description: "Projeto de um aplciativo para monitoramento do clima, foi construído com o uso de uma Weather API da Open Weather, com o intuito de ser possível pesquisar qualquer cidade do mundo. Foi utilizado as seguintes tecnologias: React, JavaScript, TailwindCSS, HTML e CSS.",
    linkRepository: "https://github.com/racalixta/weather-app",
    linkSite: "https://weather-app-tau-one-62.vercel.app/",
    image: ["", `${projectImg}weather-app.png`],
    icons: [`${techIconsLink.html}`, `${techIconsLink.css}`, `${techIconsLink.react}`, `${techIconsLink.javascript}`, `${techIconsLink.tailwind}`],
    techs: ["HTML5", "CSS3", "React", "JavaScript", "Tailwind CSS"],
  },

// sistema financeiro
// site: https://expense-tracker-alpha-one.vercel.app/
// repo: https://github.com/racalixta/expense-tracker

// weather
// site: https://weather-app-tau-one-62.vercel.app/
// repo: https://github.com/racalixta/weather-app

  /*
  {
    "id": 10,
    "title": "",
    "description": "",
    "linkRepository": "",
    "linkSite": "",
    "image": ["", `${projectImg}`],
    "icons": [`${techIconsLink.html}`, `${techIconsLink.css}`, `${techIconsLink.sass}`, `${techIconsLink.typescript}`, `${techIconsLink.angular}`],
    "techs": ["HTML5", "CSS3", ],
  },
  */
];

