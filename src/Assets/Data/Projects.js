import imgTic1 from "../img/capProyects/tictactoe.png";
import imgTic2 from "../img/capProyects/tictactoe2.png";
import imgAhorc from "../img/capProyects/ahorcado.png";
import imgAhorc2 from "../img/capProyects/ahorcado2.png";
import imgGame from "../img/capProyects/appgame1.png";
import imgGame2 from "../img/capProyects/appgame2.png";
import imgWiki from "../img/capProyects/rickandmorty2.png";
import imgWiki2 from "../img/capProyects/rickandmorty3.png";
import imglunch from "../img/capProyects/lunch1.png";
import imglunch2 from "../img/capProyects/lunch2.png";
import { FaReact, FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaNpm } from 'react-icons/fa';
import { SiRedux, SiAxios, SiPostgresql, SiExpress } from 'react-icons/si';

const projects = [
  {
    title: 'LunchUP (PF-Henry)',
    description: 'Proyecto grupal para Henry. Aplicación para que los chicos en edad escolar puedan comprar comida en los buffets de los colegios.',
    stack: [FaReact, FaCss3Alt, SiRedux, SiAxios, SiPostgresql, FaNodeJs, SiExpress, FaNpm],
    link: '#',
    repo: 'https://github.com/LaunchUP-INC/LunchUP-FRONT',
    img1: imglunch,
    img2: imglunch2,
  },
  {
    title: 'GameAppeando (PI-Henry)',
    description: 'Proyecto individual para Henry, consiste en una SPA de videojuegos tipo fandom donde podremos ver diferentes videojuegos, como asi tambien podremos agregar juegos nuevos.',
    stack: [FaReact, FaCss3Alt, SiRedux, SiAxios, SiPostgresql, FaNodeJs, SiExpress, FaNpm],
    link: '#',
    repo: 'https://github.com/GEdgardoFernandez/gameappeando',
    img1: imgGame2,
    img2: imgGame,
  },
  {
    title: 'Wiki de Rick and Morty (PI-Henry)',
    description: 'Proyecto integrador de Henry, consiste en una SPA de informacion de los episodios, personajes, etc. De la serie Rick and Morty.',
    stack: [FaReact, FaCss3Alt, SiRedux, SiAxios, SiPostgresql, FaNodeJs, SiExpress, FaNpm],
    link: '#',
    repo: 'https://github.com/GEdgardoFernandez/RickAndMorty',
    img1: imgWiki,
    img2: imgWiki2,
  },
  {
    title: 'Juego del Ahorcado',
    description: 'Juego desarrollado por mí con HTML, CSS y JavaScript para practicar mis habilidades recien adquiridas en ese momento.',
    stack: [FaHtml5, FaCss3Alt, FaJs],
    link: '#',
    repo: 'https://github.com/GEdgardoFernandez/GameAhorcado',
    img1: imgAhorc,
    img2: imgAhorc2,
  },
  {
    title: 'Tic Tac Toe',
    description: 'Juego desarrollado por mí con HTML, CSS y JavaScript para practicar mis habilidades recien adquiridas en ese momento.',
    stack: [FaHtml5, FaCss3Alt, FaJs],
    link: '#',
    repo: 'https://github.com/GEdgardoFernandez/TicTacToe',
    img1: imgTic1,
    img2: imgTic2,
  },
];

export default projects;
