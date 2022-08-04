let value = 0
const news = [
  {
    id: 0,
    day: 'JUL 25TH, 2022',
    img: './images/news/父親節.jpg',
    title: '父親專屬 - 超值獻禮',
    content: '不管你家老爸是工作狂型、居家型、還是品味文青型，他都是家人心中的大英雄!祭出八八節咖啡超值獻禮，用巨星級的風味獻給你的英雄老爸！',
    other1_title: '7/26(二)起至8/8(一)',
    other1_content: '黑卡會員獨享咖啡系列,任選4盒(含)以上<br><span class="fw-bolder fs-4 bg-danger text-light">享專屬五折優惠 再享88折</span>',
    other2_title: '',
    other2_content: '<ul class="text-start p-2"><li>1. 品項依各門市現場庫存販售為準,優惠不重複</li><li>2. 咖啡不列入黑卡2.0消費集點範團</li><li>3. 不適用外送服務</li></ul>',
    group: function () {
      if ((this.id+1) % 2 == 0) {
        value = Math.floor((this.id+1) / 2) - 1
      } else {
        value = Math.floor((this.id+1) / 2)
      }
      return value
    },
  },
  {
    id: 1,
    day: 'JUL 1TH, 2022',
    img: './images/news/禮物咖啡.jpg',
    title: '禮物咖啡 100% 心意回饋',
    content: '你送一杯咖啡給夥伴，LINE禮物送你50點！',
    other1_title: '活動期間:',
    other1_content: '2022/07/01(五) ~ 2022/07/31(日)',
    other2_title: '活動方法',
    other2_content: '<ul class="text-start p-2"><li>◆ 點我拿 50 點 - 限量 10萬杯</li><li>◆ 活動期間，單一LINE帳號僅限「贈禮」一份，送禮者與收禮者須為不同LINE帳號，商品有限售完為止。</li></ul>',
    group: function () {
      if ((this.id+1) % 2 == 0) {
        value = Math.floor((this.id+1) / 2) - 1
      } else {
        value = Math.floor((this.id+1) / 2)
      }
      return value
    },
  },
  {
    id: 2,
    day: 'MAY 27TH, 2022',
    img: './images/news/量販咖啡.jpg',
    title: '全新推出! 第三波量販精品咖啡豆系列',
    content: '【開創 D2C 市場, 最低 46 折每磅$289(半磅$145)起】, 未來門市不再只是等客人上門，而是行動咖啡顧問主動開創 D2C 全新商業模式 ',
    other1_title: '訂購方案一',
    other1_content: '<ul class="text-start p-2"><li>即購隨享 :</li><li>單次購買 4 磅以上，每磅最低優惠$319 起</li></ul>',
    other2_title: '訂購方案二',
    other2_content: '<ul class="text-start p-2"><li>訂閱贈豆 :</li><li>每個月訂購 10 磅以上</li></ul>',
    other3_title: '訂購方案三',
    other3_content: '<ul class="text-start p-2"><li>購機優享 :</li><li>可以選擇全新咖啡機，搭配 4 磅咖啡豆，每月最低$1800 起</li></ul>',
    group: function () {
      if ((this.id+1) % 2 == 0) {
        value = Math.floor((this.id+1) / 2) - 1
      } else {
        value = Math.floor((this.id+1) / 2)
      }
      return value
    },
  },
  {
    id: 3,
    day: 'MAY 18TH, 2022',
    img: './images/news/周年生日慶.jpg',
    title: '周年慶全品項8折!',
    content: '享受疫情之下的小確幸，周年慶活動5/18提前開跑, 陪您共體時艱，趕快來享受疫情下的小確幸吧!',
    other1_title: '活動期間:',
    other1_content: '限定門市 2022/05/18~2022/6/18, 凡來店消費飲品、餐食、甜點，全面8折優惠',
    other2_title: '',
    other2_content: '<ul class="text-start p-2"><li>1. 本活動適用飲品、餐食、糕點，不提供寄杯服務</li><li>2. 實體門市限定，你訂線上訂餐自取同享優惠，不適用外送及其他網路訂餐服務</li><li>3. 全品項 8 折不包含客製化加價項目</li></ul>',
    group: function () {
      if ((this.id+1) % 2 == 0) {
        value = Math.floor((this.id+1) / 2) - 1
      } else {
        value = Math.floor((this.id+1) / 2)
      }
      return value
    },
  },
]

const menu_coffee = [
  {
    id: 0,
    img: 'https://cdn.pixabay.com/photo/2021/01/11/02/56/cup-5906901_960_720.jpg',
    title: '美式咖啡 (冰/熱)',
    content: '<ul class="text-start p-2 m-0"><li>M: $60</li><li>L: $80</li></ul>',
  },
  {
    id: 1,
    img: 'https://cdn.pixabay.com/photo/2021/02/18/15/55/coffee-6027552_960_720.jpg',
    title: '拿鐵咖啡 (冰/熱)',
    content: '<ul class="text-start p-2 m-0"><li>M: $80</li><li>L: $100</li></ul>',
  },
  {
    id: 2,
    img: 'https://cdn.pixabay.com/photo/2020/06/21/15/57/cup-of-coffee-5325621_960_720.jpg',
    title: '義式濃縮',
    content: '<ul class="text-start p-2 m-0"><li>M: $60</li><li>僅供內用熱飲</li></ul>',
  },
  {
    id: 3,
    img: 'https://cdn.pixabay.com/photo/2015/07/13/14/58/coffee-843278_960_720.jpg',
    title: '曼巴 (冰/熱)',
    content: '<ul class="text-start p-2 m-0"><li>M: $85</li><li>典藏手沖咖啡</li></ul>',
  },
  {
    id: 4,
    img: 'https://cdn.pixabay.com/photo/2016/09/20/13/01/coffee-1682466_960_720.jpg',
    title: '曼特寧 (冰/熱)',
    content: '<ul class="text-start p-2 m-0"><li>M: $85</li><li>典藏手沖咖啡</li></ul>',
  },
]

const menu_food = [
  {
    id: 0,
    img: 'https://cdn.pixabay.com/photo/2015/04/20/21/05/breakfast-732231_1280.jpg',
    title: '貝果',
    content: '<ul class="text-start p-2 m-0"><li>$50 美味價 (定價 $65)</li><li>植物五辛素</li></ul>',
  },
  {
    id: 1,
    img: 'https://cdn.pixabay.com/photo/2017/05/31/02/56/food-photography-2358904_960_720.jpg',
    title: '風味三明治',
    content: '<ul class="text-start p-2 m-0"><li>$45 美味價 (定價 $60)</li><li>植物五辛素</li></ul>',
  },
  {
    id: 2,
    img: 'https://cdn.pixabay.com/photo/2021/04/12/09/37/burger-6172003_960_720.jpg',
    title: '瑪芬堡',
    content: '<ul class="text-start p-2 m-0"><li>$50 美味價 (定價 $65)</li><li>奶素</li></ul>',
  },
]

const menu_drink = [
  {
    id: 0,
    img: 'https://cdn.pixabay.com/photo/2017/08/26/19/12/matcha-green-tea-2683990_960_720.jpg',
    title: '精選抹茶',
    content: '<ul class="text-start p-2 m-0"><li>M: $60</li><li>僅供內用熱飲</li></ul>',
  },
  {
    id: 1,
    img: 'https://cdn.pixabay.com/photo/2014/11/28/23/02/tea-549424_960_720.jpg',
    title: '精選紅茶 (冰/熱)',
    content: '<ul class="text-start p-2 m-0"><li>M: $35</li><li>L: $40</li></ul>',
  },
  {
    id: 2,
    img: 'https://cdn.pixabay.com/photo/2013/03/10/09/53/milk-tea-92153_960_720.jpg',
    title: '精選奶茶 (冰/熱)',
    content: '<ul class="text-start p-2 m-0"><li>M: $55</li><li>L: $65</li></ul>',
  },
  {
    id: 3,
    img: 'https://cdn.pixabay.com/photo/2020/03/06/14/34/drinks-4907217_960_720.jpg',
    title: '經典水果茶 (冰/熱)',
    content: '<ul class="text-start p-2 m-0"><li>M: $50</li><li>L: $60</li></ul>',
  },
]