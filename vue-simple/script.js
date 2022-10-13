// 全域參數放在這裡
// 偶像名稱
const idols = [
  'mana',
  'kotono', 'nagisa', 'saki', 'suzu', 'mei',
  'sakura', 'sizuku', 'chisa', 'rei', 'haruko',
  'rui', 'yuu', 'sumire',
  'rio', 'aoi', 'ai', 'kokoro',
  'fran', 'kana', 'miho',
  'miku'
]
// 卡片名稱 'name-no-pool.webp'
const cardPaths = [
  'mana-01-fes.webp', 'mana-02-fes.webp', 'mana-03-special.webp',
  'kotono-01-normal.webp', 'kotono-02-limited.webp', 'kotono-03-fes.webp', 'kotono-04-limited.webp', 'kotono-05-limited.webp', 'kotono-06-special.webp',
  'nagisa-01-normal.webp', 'nagisa-02-normal.webp', 'nagisa-03-normal.webp', 'nagisa-04-limited.webp', 'nagisa-05-limited.webp',
  'saki-01-normal.webp', 'saki-02-normal.webp', 'saki-03-normal.webp', 'saki-04-limited.webp', 'saki-05-normal.webp',
  'suzu-01-normal.webp', 'suzu-02-normal.webp', 'suzu-03-limited.webp', 'suzu-04-limited.webp', 'suzu-05-normal.webp',
  'mei-01-normal.webp', 'mei-02-limited.webp', 'mei-03-limited.webp', 'mei-04-fes.webp', 'mei-05-normal.webp',
  'sakura-01-normal.webp', 'sakura-02-fes.webp', 'sakura-03-limited.webp', 'sakura-04-limited.webp',
  'sizuku-01-normal.webp', 'sizuku-02-normal.webp', 'sizuku-03-limited.webp', 'sizuku-04-normal.webp',
  'chisa-01-normal.webp', 'chisa-02-limited.webp', 'chisa-03-normal.webp', 'chisa-04-limited.webp',
  'rei-01-normal.webp', 'rei-02-normal.webp', 'rei-03-limited.webp', 'rei-04-normal.webp', 'rei-05-limited.webp',
  'haruko-01-normal.webp', 'haruko-02-limited.webp', 'haruko-03-limited.webp', 'haruko-04-normal.webp', 'haruko-05-limited.webp',
  'rui-01-normal.webp', 'rui-02-normal.webp', 'rui-03-limited.webp', 'rui-04-normal.webp', 'rui-05-special.webp',
  'yuu-01-normal.webp', 'yuu-02-limited.webp', 'yuu-03-limited.webp', 'yuu-04-normal.webp', 'yuu-05-fes.webp',
  'sumire-01-normal.webp', 'sumire-02-normal.webp', 'sumire-03-limited.webp', 'sumire-04-normal.webp', 'sumire-05-fes.webp',
  'rio-01-normal.webp', 'rio-02-normal.webp', 'rio-03-fes.webp', 'rio-04-limited.webp', 'rio-05-limited.webp',
  'aoi-01-normal.webp', 'aoi-02-limited.webp', 'aoi-03-limited.webp', 'aoi-04-normal.webp',
  'ai-01-normal.webp', 'ai-02-limited.webp', 'ai-03-limited.webp', 'ai-04-normal.webp', 'ai-05-limited.webp',
  'kokoro-01-normal.webp', 'kokoro-02-limited.webp', 'kokoro-03-limited.webp', 'kokoro-04-normal.webp',
  'fran-01-fes.webp',
  'kana-01-fes.webp',
  'miho-01-fes.webp',
  'miku-01-special.webp',
]

const {
  createApp
} = Vue

createApp({
  data() {
    return {
      idols: idols,
      cardPaths: [],
      cardsIHave: '',
      normalCardsIhave: '',
      limitedCardsIhave: '',
      fesCardsIhave: '',
      exportButtonText: '↓曬卡↓'
    }
  },
  mounted() {
    // 執行載入控件
    this.loadWidget()
  },
  methods: {
    // 載入控件
    loadWidget() {
      for (i = 0; i < cardPaths.length; i++) {
        let tags = cardPaths[i].split("-")
        tags[2] = tags[2].split('.')[0]

        this.cardPaths.push({
          path: cardPaths[i],
          tags: tags,
        })
      }
    },

    // 按下卡片時 計數並結算持有率
    check() {
      let mytotal = 0
      let totalPercent = 0
      let mynormal = 0
      let normalPercent = 0
      let mylimited = 0
      let limitedPercent = 0
      let myfes = 0
      let fesPercent = 0
      let totalcards = document.querySelectorAll(".cards");
      let normalcards = document.querySelectorAll(".cards.normal")
      let limitedcards = document.querySelectorAll(".cards.limited")
      let fesCards = document.querySelectorAll(".cards.fes")
      // 總所持率
      for (let i = 0; i < totalcards.length; i++) {
        if (totalcards[i].checked) {
          mytotal++;
        }
      }
      totalPercent = (mytotal / 88 * 100).toFixed(1)
      this.cardsIHave = `五星卡所持率：${totalPercent} % ( ${mytotal} / 88 )`;
      // 常駐卡所持率
      for (let i = 0; i < normalcards.length; i++) {
        if (normalcards[i].checked) {
          mynormal++;
        }
      }
      normalPercent = (mynormal / 40 * 100).toFixed(1)
      this.normalCardsIhave = `常駐池所持率：${normalPercent} % ( ${mynormal} / 40 )`;
      // 限定卡所持率
      for (let i = 0; i < limitedcards.length; i++) {
        if (limitedcards[i].checked) {
          mylimited++;
        }
      }
      limitedPercent = (mylimited / 33 * 100).toFixed(1)
      this.limitedCardsIhave = `限定池所持率：${limitedPercent} % ( ${mylimited} / 33 )`;
      // FES卡所持率
      for (let i = 0; i < fesCards.length; i++) {
        if (fesCards[i].checked) {
          myfes++;
        }
      }
      fesPercent = (myfes / 11 * 100).toFixed(1)
      this.fesCardsIhave = `FES池所持率：${fesPercent} % ( ${myfes} / 11 )`;
    },

    // 按下篩選器時 未選到的種類卡片透明化
    filter() {
      let pools = ['normal', 'limited', 'fes', 'special', ]

      let cards = document.querySelectorAll('.img')

      for (let i = 0; i < cards.length; i++) {
        cards[i].style.opacity = '100%'
      }
      for (let i = 0; i < pools.length; i++) {
        let cardsToHide = document.querySelectorAll(('.' + pools[i]))
        let pool = document.querySelector(('#' + pools[i]))
        if (!pool.checked) {
          for (let i = 0; i < cardsToHide.length; i++) {
            cardsToHide[i].style.opacity = '20%'
          }
        }

      }
      for (let i = 0; i < idols.length; i++) {
        let idolsToHide = document.querySelectorAll(('.' + idols[i]))
        let idol = document.querySelector(('#' + idols[i]))
        if (!idol.checked) {
          for (let i = 0; i < idolsToHide.length; i++) {
            idolsToHide[i].style.opacity = '20%'
          }
        }
      }

    },

    //按下「曬卡」後，產生一張高清曬卡圖
    exportImage() {
      let node = document.getElementById('capture');
      this.exportButtonText = '...曬卡中...'
      // 清掉舊圖
      let oldImg = document.getElementById('uesrCards')
      document.body.removeChild(oldImg)
      // 產生曬卡圖
      let scale = 3
      domtoimage.toPng(node
          //// 這邊有點問題，會導致手機板無法在新分頁開圖和直接下載
          //// 而且用分享選項得到的圖片還是沒有變大 哭啊
          //   , {
          //   width: node.clientWidth * scale,
          //   height: node.clientHeight * scale,
          //   style: {
          //     transform: 'scale(' + scale + ')',
          //     transformOrigin: 'top left'
          //   }
          // }
        )
        .then(function (dataUrl) {
          let img = new Image();
          img.src = dataUrl;
          img.id = 'uesrCards'
          document.body.appendChild(img);
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });
      // exportButton.innerHTML = '<button onclick="exportImage()">↓重新曬卡↓</button>'
      this.exportButtonText = '↓重新曬卡↓'
    }
  },
}).mount('#app')