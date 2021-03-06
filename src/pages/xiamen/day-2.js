import React from 'react';

import Layout from '../../components/layout';

const img1 = require('../../images/xiamen/day2/1.jpg');
const img2 = require('../../images/xiamen/day2/2.jpg');
const img3 = require('../../images/xiamen/day2/3.jpg');
const img4 = require('../../images/xiamen/day2/4.jpg');
const img5 = require('../../images/xiamen/day2/5.jpg');

const DayTwo = () => (
  <Layout
    seo={{
      title: '旅游-厦门',
      description: '旅游-厦门',
      keywords: '旅游 厦门',
    }}
    nav={{ title: '第二天', back: '/xiamen/' }}
  >
    <div className="content">
      <h4>
        鼓浪屿：
        <br />
        <br />
        <small>
          鼓浪屿原名“圆沙州”,又名“圆州仔”,明朝时改称“鼓浪屿”。在小岛的西南海边,有两块相叠岩石,长年累月受海水侵蚀,中间形成一个竖洞,每逢涨潮时波涛撞击着岩石,发出如击鼓的浪声,称为“鼓浪石”,鼓浪屿因此得名。除此之外，鼓浪屿也素有“音乐之岛”的美称，因为早期的鼓浪屿,每40户人家,就有一户拥有钢琴。
        </small>
      </h4>

      <p>
        一日之际在于晨，兴致好或许可以结伴早起一起去海边看日出，日出时间是6:08，其实也就说说，不指望你会爬的起来……
      </p>
      <p>
        日光岩似乎值得一玩，7点应该就开放了，既然住岛上了，那就起早点直奔日光岩吧，晚了一定人山人海。日光岩上下来之后就按兴趣和体力选择是否逛其余昨天逛剩下的景点了。
      </p>
      <img style={{ marginBottom: '8px', display: 'block' }} src={img1} />
      <small
        style={{ marginBottom: '8px', textAlign: 'center', display: 'block' }}
      >
        （日光岩）
      </small>
      <p>
        玩的同时请记得在规定时间前收拾行装
        <em>（不要遗漏个人物品）</em>
        退房，然后就是离岛去市区预订的房间入住啦。
      </p>
      <p>入住点附近吃完中饭就是下午的行程了。</p>
      <h4>
        五缘湾：
        <br />
        <br />
        <small>
          旧称钟宅湾。横卧碧波的五座圆拱大桥是城区内湾的醒目标志。这五座拱桥与其倒影构成“五圆”，谐音“五缘”，寓意海峡两岸期盼的团圆和五洲大团圆以及闽台之间的地缘、血缘、文缘、商缘、法缘等五缘。
        </small>
      </h4>
      <img style={{ marginBottom: '8px', display: 'block' }} src={img2} />
      <small
        style={{ marginBottom: '8px', textAlign: 'center', display: 'block' }}
      >
        （五缘湾）
      </small>
      <p>五缘湾的湿地公园听说挺美的，有黑天鹅，有时间的话可以去看看。</p>
      <p>
        曾厝垵就是一个社区，号称最文艺渔村，由于个人没去过，所以不表，去的话之后请告诉我好不好玩。
        环岛路就是踩砂踏浪，这里的沙滩质量要好过鼓浪屿，晚上返回到中山路吃东西，放慢你吃饭的节奏，让自己适应这座文艺城。
      </p>
      <p>
        晚上回去可以买些水果吃，如果没记错，这个时节那里的青芒价廉物美。再晚些时候，如果饿了可以去吃个干净点的夜排挡，当地的夜排挡非常多。
      </p>
      <img style={{ marginBottom: '8px', display: 'block' }} src={img3} />
      <small
        style={{ marginBottom: '8px', textAlign: 'center', display: 'block' }}
      >
        （曾厝垵）
      </small>
      <img style={{ marginBottom: '8px', display: 'block' }} src={img4} />
      <small
        style={{ marginBottom: '8px', textAlign: 'center', display: 'block' }}
      >
        （环岛路）
      </small>
      <img style={{ marginBottom: '8px', display: 'block' }} src={img5} />
      <small
        style={{ marginBottom: '8px', textAlign: 'center', display: 'block' }}
      >
        （中山路）
      </small>
    </div>
  </Layout>
);

export default DayTwo;
