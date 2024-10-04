var client_id = 'CLIENT_ID';
var client_secret = 'CLIENT_SECRET';

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    var token = body.access_token;
  }
})();

/*async function getProfile(accessToken) {
    let accessToken = localStorage.getItem('access_token');
  
    const response = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });
  
    const data = await response.json();
  }*/

// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization

/*const token = 'BQBNeRyY1zHMQ2BmeYTa80hpV2ECVZ5XCcw198yWeXtQIEn28iclv76-A5HUwU_pWY8YBVFTY5bVmqbvPKxQP7cShBp0UNKP9oYJldrAxrEcIwswb0_Zwu8I3ZAJeEc-hr3pUJ6Jl1mQfU97aO-it6--W8EFDAsS7wJj2qwUPqnVQ6Rkg_2G0mZXk-BxPdsWHf5bWLtyW_BmHsP0Rfe0N-tMWvD1o7wqyBpC8YriwD77yQ8gXB-AmQz8pgMTdAqrS_e0Jn_-QiHMB1VyxWxGqeju_tKL';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

// Get top 5 tracks
async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

// Top 5 reccomended songs based on top 5 tracks
const topTracks = await getTopTracks();
// Save the 10 songs in the playlist
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
); */

/* Save the top 10 songs in the playlist

Code
JS
JavaScript
// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQBNeRyY1zHMQ2BmeYTa80hpV2ECVZ5XCcw198yWeXtQIEn28iclv76-A5HUwU_pWY8YBVFTY5bVmqbvPKxQP7cShBp0UNKP9oYJldrAxrEcIwswb0_Zwu8I3ZAJeEc-hr3pUJ6Jl1mQfU97aO-it6--W8EFDAsS7wJj2qwUPqnVQ6Rkg_2G0mZXk-BxPdsWHf5bWLtyW_BmHsP0Rfe0N-tMWvD1o7wqyBpC8YriwD77yQ8gXB-AmQz8pgMTdAqrS_e0Jn_-QiHMB1VyxWxGqeju_tKL';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

const tracksUri = [
  'spotify:track:6K4t31amVTZDgR3sKmwUJJ','spotify:track:7knLcYCOSaURD0d7HUULFM','spotify:track:1IHWl5LamUGEuP4ozKQSXZ','spotify:track:5rPNVwYjVEgkq6YNPki4Zc','spotify:track:4AFsRbaLKRWo3dDtjDFA2V','spotify:track:2TktkzfozZifbQhXjT6I33','spotify:track:2mdEsXPu8ZmkHRRtAdC09e','spotify:track:4OOlKNTQISagv0nsofvySZ','spotify:track:7oDd86yk8itslrA9HRP2ki','spotify:track:4vv8wcnT04GHHbUCFBAiHF'
];

async function createPlaylist(tracksUri){
  const { id: user_id } = await fetchWebApi('v1/me', 'GET')

  const playlist = await fetchWebApi(
    `v1/users/${user_id}/playlists`, 'POST', {
      "name": "My recommendation playlist",
      "description": "Playlist created by the tutorial on developer.spotify.com",
      "public": false
  })

  await fetchWebApi(
    `v1/playlists/${playlist.id}/tracks?uris=${tracksUri.join(',')}`,
    'POST'
  );

  return playlist;
}

const createdPlaylist = await createPlaylist(tracksUri);
console.log(createdPlaylist.name, createdPlaylist.id); */

/* Listen to the songs right here right now 

const playlistId = '52yIk28ED8L9vnjUjOoJKT';

<iframe
  title="Spotify Embed: Recommendation Playlist "
  src={`https://open.spotify.com/embed/playlist/52yIk28ED8L9vnjUjOoJKT?utm_source=generator&theme=0`}
  width="100%"
  height="100%"
  style={{ minHeight: '360px' }}
  frameBorder="0"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
/>
*/