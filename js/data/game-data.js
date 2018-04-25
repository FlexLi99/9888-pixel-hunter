//  Объект структуры данных для информационных фреймов

export const InfoFrames = {
  intro: {
    text: `Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.`
  },
  greeting: {
    title: `Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!`,
    text: `Правила игры просты.<br>
            Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
            Задача кажется тривиальной, но не думай, что все так просто.<br>
            Фотореализм обманчив и коварен.<br>
            Помни, главное — смотреть очень внимательно.`
  },
  rules: {
    title: `Правила`,
    text: `Угадай 10 раз для каждого изображения фото <img
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

export const initialState = Object.freeze({
  gameFrames: 0,
  currentFrame: 0,
  allFrames: 0,
  time: 20,
  lives: 3,
  fastPt: 0,
  slowPt: 0
});

//  Объект структуры данных для фреймов с играми

export const games = {
  'game-1': {
    desc: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        imgSrc: `https://k42.kn3.net/CF42609C8.jpg`,
        imgAlt: `Option 1`,
        questName: `question1`,
        rightAnswer: `paint`
      },
      {
        imgSrc: `http://i.imgur.com/1KegWPz.jpg`,
        imgAlt: `Option 2`,
        questName: `question2`,
        rightAnswer: `photo`
      }
    ]
  },
  'game-2': {
    desc: `Угадай, фото или рисунок?`,
    answers: [
      {
        imgSrc: `https://k42.kn3.net/D2F0370D6.jpg`,
        imgAlt: `Option 1`,
        questName: `question1`,
        rightAnswer: `paint`,
      }
    ]
  },
  'game-3': {
    desc: `Найдите рисунок среди изображений`,
    answers: [
      {
        imgSrc: `https://k32.kn3.net/5C7060EC5.jpg`,
        imgAlt: `Option 1`,
        rightAnswer: `paint`
      },
      {
        imgSrc: `https://i.imgur.com/DiHM5Zb.jpg`,
        imgAlt: `Option 1`,
        rightAnswer: `photo`
      },
      {
        imgSrc: `http://i.imgur.com/DKR1HtB.jpg`,
        imgAlt: `Option 1`,
        rightAnswer: `photo`
      }
    ]
  }
};

export const service = {
  paint: `Рисунок`,
  photo: `Фото`
};
