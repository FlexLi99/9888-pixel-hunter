//  Объект структуры данных для информационных фреймов

export const InfoFrames = {
  INTRO: {
    text: `Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.`
  },
  GREETING: {
    title: `Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!`,
    text: `Правила игры просты.<br>
            Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
            Задача кажется тривиальной, но не думай, что все так просто.<br>
            Фотореализм обманчив и коварен.<br>
            Помни, главное — смотреть очень внимательно.`
  },
  RULES: {
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

//  Объект структуры данных для фреймов с играми

export const Games = {
  'GAME-1': {
    desc: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        src: `https://k42.kn3.net/CF42609C8.jpg`,
        alt: `Option 1`,
        question: `question1`,
        answer: `paint`
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        alt: `Option 2`,
        question: `question2`,
        answer: `photo`
      }
    ]
  },
  'GAME-2': {
    desc: `Угадай, фото или рисунок?`,
    answers: [
      {
        src: `https://k42.kn3.net/D2F0370D6.jpg`,
        alt: `Option 1`,
        question: `question1`,
        answer: `paint`,
      }
    ]
  },
  'GAME-3': {
    desc: `Найдите рисунок среди изображений`,
    answers: [
      {
        src: `https://k32.kn3.net/5C7060EC5.jpg`,
        alt: `Option 1`,
        answer: `paint`
      },
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        alt: `Option 1`,
        answer: `photo`
      },
      {
        src: `http://i.imgur.com/DKR1HtB.jpg`,
        alt: `Option 1`,
        answer: `photo`
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
