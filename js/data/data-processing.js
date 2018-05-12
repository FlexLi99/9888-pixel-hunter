import {Games} from './game-data';

export default (data) => {
  data.forEach((item) => Games.push(item));
};
