const questionsAndAnswers = {
  nonGraduate: [
    {
      trait: "activity",
      questionTextOne: "Я часто ініціюю зміни в своєму житті.",
      questionTextTwo: "Я надаю перевагу міцним, усталеним зв'язкам.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Я маю чимало слабкостей та недоліків і це мене турбує.",
      questionTextTwo: "Слабкості та недоліки властиві усім.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Я завжди ретельно прибираю свою кімнату.",
      questionTextTwo: "Я не занадто переймаюся чистотою.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "leadership",
      questionTextOne: "Мені до вподоби виконувати розпорядження.",
      questionTextTwo: "Я люблю керувати.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Мене цікавить все нове.",
      questionTextTwo: "Я надаю перевагу стабільності.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Мені важко сидіти без діла.",
      questionTextTwo: "Коли мені хочеться розслабитися я можу це дозволити.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Тільки я несу відповідальність за невдачі.",
      questionTextTwo: "Часто винні обставини або інші люди.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Мені подобається коли на столі лад.",
      questionTextTwo: "Мені подобається творчий безлад.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "leadership",
      questionTextOne: "Мені до вподоби виконувати задачі керівника.",
      questionTextTwo: "Я часто беруся керувати.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Я обожнюю несподіванки.",
      questionTextTwo: "Я люблю передбачуваність.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Я активна рухлива людина.",
      questionTextTwo: "Я веду розмірений спосіб життя.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Я звинувачую себе у невдачах.",
      questionTextTwo: "Я не буду дорікати собі.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Я не люблю спізнюватися.",
      questionTextTwo: "Я не переймаюся через запізнення.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "leadership",
      questionTextOne: "Я керуюся порадами досвідчених колег.",
      questionTextTwo: "Я керуюся власною інтуїцією.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Я люблю все нове та незвідане.",
      questionTextTwo: "Я надаю перевагу знайомим речам.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Мені подобається робити кілька справ одночасно.",
      questionTextTwo: "Мені подобається робити справи послідовно.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Поганий мир краще доброї сварки.",
      questionTextTwo: "Конфлікт — важлива частина спілкування.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Мені подобаються завдання що вимагають старанності.",
      questionTextTwo: "Мені подобаються завдання що вимагають інтуїції.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "leadership",
      questionTextOne: "Я спокійно ставлюсь до контролю.",
      questionTextTwo: "Я відчуваю дискомфорт коли мене контролюють.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Мені властиво фантазувати.",
      questionTextTwo: "Я надаю перевагу реальному погляду.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Я дуже моторна людина.",
      questionTextTwo: "Мені потрібно все планувати.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Будь-яку справу важливо робити в співпраці.",
      questionTextTwo: "Будь-яку справу важливо робити краще за інших.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Мені подобались послідовні заняття.",
      questionTextTwo: "Мені подобались творчі заняття.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Краще виправляти помилки під час роботи.",
      questionTextTwo: "Краще завершити роботу а потім виправити.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Я люблю непередбачувані фільми.",
      questionTextTwo: "Я люблю історичні фільми.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я заряджаюсь енергією під час спілкування.",
      questionTextTwo: "Я відпочиваю на самоті.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Конфлікт краще вирішувати компромісом.",
      questionTextTwo: "Комусь доведеться поступитися.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Успіх це працьовитість.",
      questionTextTwo: "Успіх це талант або везіння.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "leadership",
      questionTextOne: "Я нормально ставлюсь до звітів.",
      questionTextTwo: "Мене дратує необхідність звітувати.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Життя може раптово змінитись.",
      questionTextTwo: "Потрібно докласти зусиль щоб щось змінити.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я легко знайомлюся з новими людьми.",
      questionTextTwo: "Мені простіше коли мене представлять.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Мені подобається бути частиною команди.",
      questionTextTwo: "Мені більше подобається працювати на самоті.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Життя має бути підпорядкованим правилам.",
      questionTextTwo: "Життя має бути непередбачуваним.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Мене часто опановує самотність.",
      questionTextTwo: "Я оптиміст.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Я уявляю схему виконання задачі.",
      questionTextTwo: "Я уявляю картинку.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я люблю розширювати коло друзів.",
      questionTextTwo: "Я віддаю перевагу кільком друзям.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я дбаю про інтереси інших.",
      questionTextTwo: "Я дбаю про власні інтереси.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Я довго переживаю невдачі.",
      questionTextTwo: "Я швидко їх забуваю.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Мій настрій легко зіпсувати.",
      questionTextTwo: "Мені складно зіпсувати настрій.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я оберу курси переконування.",
      questionTextTwo: "Я оберу курси фінансів.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я люблю великі компанії.",
      questionTextTwo: "Я люблю тишу і самотність.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Людям властиво співпрацювати.",
      questionTextTwo: "Людям властиво конкурувати.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Невдача вибиває мене з колії.",
      questionTextTwo: "Я не засмучуюсь через невдачі.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Я часто згадую трагічні події.",
      questionTextTwo: "Я пам’ятаю лише позитивне.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Кар'єру краще будувати через софт-скіли.",
      questionTextTwo: "Кар'єру краще будувати через хард-скіли.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Мені подобається екстремальний спорт.",
      questionTextTwo: "Я не розумію небезпечні види спорту.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "leadership",
      questionTextOne: "Керування це пояснення.",
      questionTextTwo: "Керування це накази.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Я обмірковую рішення.",
      questionTextTwo: "Я швидко приймаю рішення.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Життя озлоблює людей.",
      questionTextTwo: "Люди здебільшого добрі.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Я часто відчуваю сильні емоції.",
      questionTextTwo: "Мене важко вивести з рівноваги.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Мене приваблюють гострі відчуття.",
      questionTextTwo: "Я уникаю небезпечних ситуацій.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "leadership",
      questionTextOne: "Я не борюсь за лідерство.",
      questionTextTwo: "Я із задоволенням керую.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Я контролюю почуття.",
      questionTextTwo: "Я слідую за бажаннями.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Є люди які мені не подобаються.",
      questionTextTwo: "Мені подобаються люди з якими я працюю.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Мій настрій легко змінюється.",
      questionTextTwo: "Мій настрій стабільний.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я люблю карнавали та вечірки.",
      questionTextTwo: "Я люблю спокійний відпочинок.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "leadership",
      questionTextOne: "Я слухаю думки оточення.",
      questionTextTwo: "Я вирішую сам.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Я складаю список покупок.",
      questionTextTwo: "Я роблю спонтанні покупки.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Більшість людей не варті довіри.",
      questionTextTwo: "Більшість людей чесні.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Емоції переповнюють мене.",
      questionTextTwo: "Я контролюю емоції.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я добре почуваюся коли на мене звертають увагу.",
      questionTextTwo: "Я не люблю привертати увагу.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Злі слова довго виводять мене з рівноваги.",
      questionTextTwo: "Я спокійно ставлюсь до критики.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Я продумую кілька варіантів подій.",
      questionTextTwo: "Я вирішую проблеми коли вони виникають.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я дружньо ставлюся до всіх.",
      questionTextTwo: "Я не добрий до всіх.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я намагаюсь викликати усмішку у людей.",
      questionTextTwo: "Я не намагаюсь комусь сподобатися.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я часто в центрі уваги.",
      questionTextTwo: "Я стриманий.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Я хвилююсь через майбутнє.",
      questionTextTwo: "Я не відчуваю тривоги.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Я читаю відгуки перед покупкою.",
      questionTextTwo: "Я купую спонтанно.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я поводжуся тактовно.",
      questionTextTwo: "Я іноді зачіпаю людей.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Життя це гра.",
      questionTextTwo: "Життя це досвід поколінь.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Мені подобається коли звертають увагу.",
      questionTextTwo: "Я не люблю увагу.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я хвилююсь коли я в центрі уваги.",
      questionTextTwo: "Я спокійний в центрі уваги.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Успіх це регулярна праця.",
      questionTextTwo: "Успіх це інтуїція.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я люблю обійми.",
      questionTextTwo: "Я не люблю обійми.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Я змінююсь щодня.",
      questionTextTwo: "Я майже не змінююсь.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
  ],
  graduate: [
    {
      trait: "subjects",
      questionText: "Вкажіть ваші оцінки з предмету згідно вашого атестату.",
      subjects: [
        {
          id: crypto.randomUUID(),
          subjectLabelName: "Математика",
          subjectInputNameAttribute: "math",
        },
        {
          id: crypto.randomUUID(),
          subjectLabelName: "Фізика",
          subjectInputNameAttribute: "physics",
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Я часто ініціюю зміни в своєму житті.",
      questionTextTwo: "Я надаю перевагу міцним, усталеним зв'язкам.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Я маю чимало слабкостей та недоліків і це мене турбує.",
      questionTextTwo: "Слабкості та недоліки властиві усім.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Я завжди ретельно прибираю свою кімнату.",
      questionTextTwo: "Я не занадто переймаюся чистотою.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "leadership",
      questionTextOne: "Мені до вподоби виконувати розпорядження.",
      questionTextTwo: "Я люблю керувати.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Мене цікавить все нове.",
      questionTextTwo: "Я надаю перевагу стабільності.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Мені важко сидіти без діла.",
      questionTextTwo: "Коли мені хочеться розслабитися я можу це дозволити.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Тільки я несу відповідальність за невдачі.",
      questionTextTwo: "Часто винні обставини або інші люди.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Мені подобається коли на столі лад.",
      questionTextTwo: "Мені подобається творчий безлад.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "leadership",
      questionTextOne: "Мені до вподоби виконувати задачі керівника.",
      questionTextTwo: "Я часто беруся керувати.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Я обожнюю несподіванки.",
      questionTextTwo: "Я люблю передбачуваність.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Я активна рухлива людина.",
      questionTextTwo: "Я веду розмірений спосіб життя.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Я звинувачую себе у невдачах.",
      questionTextTwo: "Я не буду дорікати собі.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Я не люблю спізнюватися.",
      questionTextTwo: "Я не переймаюся через запізнення.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "leadership",
      questionTextOne: "Я керуюся порадами досвідчених колег.",
      questionTextTwo: "Я керуюся власною інтуїцією.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Я люблю все нове та незвідане.",
      questionTextTwo: "Я надаю перевагу знайомим речам.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Мені подобається робити кілька справ одночасно.",
      questionTextTwo: "Мені подобається робити справи послідовно.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Поганий мир краще доброї сварки.",
      questionTextTwo: "Конфлікт — важлива частина спілкування.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Мені подобаються завдання що вимагають старанності.",
      questionTextTwo: "Мені подобаються завдання що вимагають інтуїції.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "leadership",
      questionTextOne: "Я спокійно ставлюсь до контролю.",
      questionTextTwo: "Я відчуваю дискомфорт коли мене контролюють.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Мені властиво фантазувати.",
      questionTextTwo: "Я надаю перевагу реальному погляду.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Я дуже моторна людина.",
      questionTextTwo: "Мені потрібно все планувати.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Будь-яку справу важливо робити в співпраці.",
      questionTextTwo: "Будь-яку справу важливо робити краще за інших.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Мені подобались послідовні заняття.",
      questionTextTwo: "Мені подобались творчі заняття.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Краще виправляти помилки під час роботи.",
      questionTextTwo: "Краще завершити роботу а потім виправити.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Я люблю непередбачувані фільми.",
      questionTextTwo: "Я люблю історичні фільми.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я заряджаюсь енергією під час спілкування.",
      questionTextTwo: "Я відпочиваю на самоті.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Конфлікт краще вирішувати компромісом.",
      questionTextTwo: "Комусь доведеться поступитися.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Успіх це працьовитість.",
      questionTextTwo: "Успіх це талант або везіння.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "leadership",
      questionTextOne: "Я нормально ставлюсь до звітів.",
      questionTextTwo: "Мене дратує необхідність звітувати.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Життя може раптово змінитись.",
      questionTextTwo: "Потрібно докласти зусиль щоб щось змінити.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я легко знайомлюся з новими людьми.",
      questionTextTwo: "Мені простіше коли мене представлять.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Мені подобається бути частиною команди.",
      questionTextTwo: "Мені більше подобається працювати на самоті.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Життя має бути підпорядкованим правилам.",
      questionTextTwo: "Життя має бути непередбачуваним.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Мене часто опановує самотність.",
      questionTextTwo: "Я оптиміст.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Я уявляю схему виконання задачі.",
      questionTextTwo: "Я уявляю картинку.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я люблю розширювати коло друзів.",
      questionTextTwo: "Я віддаю перевагу кільком друзям.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я дбаю про інтереси інших.",
      questionTextTwo: "Я дбаю про власні інтереси.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Я довго переживаю невдачі.",
      questionTextTwo: "Я швидко їх забуваю.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Мій настрій легко зіпсувати.",
      questionTextTwo: "Мені складно зіпсувати настрій.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я оберу курси переконування.",
      questionTextTwo: "Я оберу курси фінансів.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я люблю великі компанії.",
      questionTextTwo: "Я люблю тишу і самотність.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Людям властиво співпрацювати.",
      questionTextTwo: "Людям властиво конкурувати.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Невдача вибиває мене з колії.",
      questionTextTwo: "Я не засмучуюсь через невдачі.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Я часто згадую трагічні події.",
      questionTextTwo: "Я пам’ятаю лише позитивне.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Кар'єру краще будувати через софт-скіли.",
      questionTextTwo: "Кар'єру краще будувати через хард-скіли.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Мені подобається екстремальний спорт.",
      questionTextTwo: "Я не розумію небезпечні види спорту.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "leadership",
      questionTextOne: "Керування це пояснення.",
      questionTextTwo: "Керування це накази.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Я обмірковую рішення.",
      questionTextTwo: "Я швидко приймаю рішення.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Життя озлоблює людей.",
      questionTextTwo: "Люди здебільшого добрі.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Я часто відчуваю сильні емоції.",
      questionTextTwo: "Мене важко вивести з рівноваги.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Мене приваблюють гострі відчуття.",
      questionTextTwo: "Я уникаю небезпечних ситуацій.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "leadership",
      questionTextOne: "Я не борюсь за лідерство.",
      questionTextTwo: "Я із задоволенням керую.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Я контролюю почуття.",
      questionTextTwo: "Я слідую за бажаннями.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Є люди які мені не подобаються.",
      questionTextTwo: "Мені подобаються люди з якими я працюю.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Мій настрій легко змінюється.",
      questionTextTwo: "Мій настрій стабільний.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я люблю карнавали та вечірки.",
      questionTextTwo: "Я люблю спокійний відпочинок.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "leadership",
      questionTextOne: "Я слухаю думки оточення.",
      questionTextTwo: "Я вирішую сам.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Я складаю список покупок.",
      questionTextTwo: "Я роблю спонтанні покупки.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Більшість людей не варті довіри.",
      questionTextTwo: "Більшість людей чесні.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Емоції переповнюють мене.",
      questionTextTwo: "Я контролюю емоції.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я добре почуваюся коли на мене звертають увагу.",
      questionTextTwo: "Я не люблю привертати увагу.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Злі слова довго виводять мене з рівноваги.",
      questionTextTwo: "Я спокійно ставлюсь до критики.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Я продумую кілька варіантів подій.",
      questionTextTwo: "Я вирішую проблеми коли вони виникають.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я дружньо ставлюся до всіх.",
      questionTextTwo: "Я не добрий до всіх.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я намагаюсь викликати усмішку у людей.",
      questionTextTwo: "Я не намагаюсь комусь сподобатися.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я часто в центрі уваги.",
      questionTextTwo: "Я стриманий.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "emotionalStability",
      questionTextOne: "Я хвилююсь через майбутнє.",
      questionTextTwo: "Я не відчуваю тривоги.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Я читаю відгуки перед покупкою.",
      questionTextTwo: "Я купую спонтанно.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я поводжуся тактовно.",
      questionTextTwo: "Я іноді зачіпаю людей.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Життя це гра.",
      questionTextTwo: "Життя це досвід поколінь.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Мені подобається коли звертають увагу.",
      questionTextTwo: "Я не люблю увагу.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я хвилююсь коли я в центрі уваги.",
      questionTextTwo: "Я спокійний в центрі уваги.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
      ],
    },
    {
      trait: "structure",
      questionTextOne: "Успіх це регулярна праця.",
      questionTextTwo: "Успіх це інтуїція.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "social",
      questionTextOne: "Я люблю обійми.",
      questionTextTwo: "Я не люблю обійми.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
    {
      trait: "activity",
      questionTextOne: "Я змінююсь щодня.",
      questionTextTwo: "Я майже не змінююсь.",
      answers: [
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: 1.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: 0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "50 / 50.",
          points: 0.0,
        },
        {
          id: crypto.randomUUID(),
          answerText: "В деякому сенсі так.",
          points: -0.5,
        },
        {
          id: crypto.randomUUID(),
          answerText: "Однозначно так.",
          points: -1.0,
        },
      ],
    },
  ],
};

export default questionsAndAnswers;
