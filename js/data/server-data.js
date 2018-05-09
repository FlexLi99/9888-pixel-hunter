import dataProcessing from './data-processing';

const SERVER_URL = `https://es.dump.academy/pixel-hunter/questions`;

export default class DataLoad {
  static getServerData() {
    return fetch(SERVER_URL).then((response) => {
      if (response.ok) {
        return response;
      } else {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
    }).then((response) => response.json()).then(dataProcessing);
  }
}
