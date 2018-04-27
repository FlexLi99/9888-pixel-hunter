//  Объект структуры данных для информационных фреймов

export const InfoFrames = {
  INTRO: {
    TEXT: `Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.`
  },
  GREETING: {
    TITLE: `Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!`,
    TEXT: `Правила игры просты.<br>
            Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
            Задача кажется тривиальной, но не думай, что все так просто.<br>
            Фотореализм обманчив и коварен.<br>
            Помни, главное — смотреть очень внимательно.`
  },
  RULES: {
    TITLE: `Правила`,
    TEXT: `Угадай 10 раз для каждого изображения фото <img
            src="img/photo_icon.png" width="16" height="16"> или рисунок <img
            src="img/paint_icon.png" width="16" height="16" alt="">.<br>
            Фотографиями или рисунками могут быть оба изображения.<br>
            На каждую попытку отводится 30 секунд.<br>
            Ошибиться можно не более 3 раз.<br>
            <br>
            Готовы?`
  }
};

//  Объект структуры данных для начальных параметров игры

export const InitialState = Object.freeze({
  ALL_FRAMES: 14,
  GAME_FRAMES: 10,
  CURRENT_FRAME: 0,
  TIME: 15,
  LIVES: 3
});

export const Constants = Object.freeze({
  FAST_TIME: 10,
  SLOW_TIME: 20,
  INFO_FRAMES: 3,
  VALID_ANSWER: 100,
  FAST_ANSWER: 50,
  SLOW_ANSWER: -50,
  SCORE_LENGTH: 10
});

//  Объект структуры данных для фреймов с играми

export const Games = {
  'GAME-1': {
    DESC: `Угадайте для каждого изображения фото или рисунок?`,
    ANSWERS: [
      {
        IMGSRC: `https://k42.kn3.net/CF42609C8.jpg`,
        IMGALT: `Option 1`,
        QUESTNAME: `question1`,
        RIGHTANSWER: `paint`
      },
      {
        IMGSRC: `http://i.imgur.com/1KegWPz.jpg`,
        IMGALT: `Option 2`,
        QUESTNAME: `question2`,
        RIGHTANSWER: `photo`
      }
    ]
  },
  'GAME-2': {
    DESC: `Угадай, фото или рисунок?`,
    ANSWERS: [
      {
        IMGSRC: `https://k42.kn3.net/D2F0370D6.jpg`,
        IMGALT: `Option 1`,
        QUESTNAME: `question1`,
        RIGHTANSWER: `paint`,
      }
    ]
  },
  'GAME-3': {
    DESC: `Найдите рисунок среди изображений`,
    ANSWERS: [
      {
        IMGSRC: `https://k32.kn3.net/5C7060EC5.jpg`,
        IMGALT: `Option 1`,
        RIGHTANSWER: `paint`
      },
      {
        IMGSRC: `https://i.imgur.com/DiHM5Zb.jpg`,
        IMGALT: `Option 1`,
        RIGHTANSWER: `photo`
      },
      {
        IMGSRC: `http://i.imgur.com/DKR1HtB.jpg`,
        IMGALT: `Option 1`,
        RIGHTANSWER: `photo`
      }
    ]
  }
};

export const Service = {
  PAINT: `Рисунок`,
  PHOTO: `Фото`,
  WIN: `Победа!`,
  FAIL: `Вы проиграли :'(`
};
