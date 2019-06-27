// For local usage
// const source = 'http://127.0.0.1:8080/dataDefault.json';
// const source2 = 'http://127.0.0.1:8080/dataLoad.json';

async function loadGames(source) {
  const response = await fetch(source);
  const json = await response.json();
  return rendering(json);
}

// async function loadGames(source) {
//   const response = await fetch(source);
//   const json = await response.json();
//   return rendering(json);
// }

function rendering(games) {
  document.getElementById('target').innerHTML = `
    <button type="button" onclick="loadGames(source2)">Update</button><br>
    <table>
      <caption>
        ${games.caption}
      </caption>
      <tr>
        <td>${games.headers[0]}</td>
        <td>${games.headers[1]}</td>
        <td>${games.headers[2]}</td>
      </tr>
      <tr>
        <td>${games.data[0][0]}</td>
        <td>${games.data[0][1]}</td>
        <td>${games.data[0][2]}</td>
      </tr>
      <tr>
        <td>${games.data[1][0]}</td>
        <td>${games.data[1][1]}</td>
        <td>${games.data[1][2]}</td>
      </tr>
      <tr>
        <td>${games.data[2][0]}</td>
        <td>${games.data[2][1]}</td>
        <td>${games.data[2][2]}</td>
      </tr>
    </table>
  `;
}

loadGames(source);
