import axios from 'axios';

var id = "f763bb66d3ad6d2baf68";
var sec = "9383cc84eb9474e608f3c37f56319ff3933ba1bd";
var params = `?client_id=${id}&client_secret=${sec}`;

async function getProfile(username) {
  const profile = await axios.get(`https://api.github.com/users/${username}${params}`);
  return profile.data
}

// getProfile('mickambar19')
//   .then(function (data) {
//
//   });

function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`);
}

function getStarCount (repos) {
  return repos.data.reduce((count, { stargazers_count}) => count + stargazers_count , 0);
}

function calculateScore ({followers}, repos) {
  return followers + (getStarCount(repos) * 3);
}

function handleError (error) {
  console.warn(error);
  return null;
}

async function getUserData(player){
  const [profile, repos ] = await Promise.all([getProfile(player), getRepos(player)]);
  return { profile, score: repos}
}

function sortPlayers(players) {
  return players.sort((a, b) => (b.score - a.score))
}

export function battle (players){
  return axios.all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError)
}

export function fetchPopularRepos (language) {
  const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
  
  return axios.get(encodedURI)
    .then( ({data})=> data.items );
}


+ numeroAtomico:Int
+ nombre:Cadena
+ Nombre2:Cadena
+ simbolo:Cadena
+ clasificacion:Cadena
+ grupo:Int
+ periodo:Int
+ bloque:Cadena
+ masa:float
+ Valencia:Cadena
+ codigoFamilia:Int
+ funcion:Cadena
+ humano:float
+ aplicaciones:Cadena
+ estado:Cadena
+ estructura:Cadena
+ color:Cadena
+ densidad:float
+ fusion:float
+ ebullicon:float
+ calor:float
+ evaporizacion:float
+ calorFusion:float
+ electrica:float
+ termica:float
+ Configuracionelectronica:float
+ radioAtomico:float
+ radioCovalente:float
+ volumennumeroOxida:float
+ cion:Cadena
+ electrones:Cadena
+ afinidad:float
+ electronegatividad:float
+ primeraEnergia:float
+ segundaEnergia:float
+ terceraEnergia:float
+ descubridor:Cadena
+ lugar:Cadena
+ anio:Cadena
+ origen:Cadena
+ obtencion:Cadena
+ atmosfera:double
+ corteza:double
+ oceanos:double
+ universo:double
+ salud:cadena
+ ambiente:cadena
