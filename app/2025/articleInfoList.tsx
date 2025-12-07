import {ArticleInfo} from '@/app/lib'
import {Nanocloudx} from '@/app/2025/articles/Nanocloudx'
import {Fuyutsubaki} from '@/app/2025/articles/Fuyutsubaki'
import {Arushiro} from '@/app/2025/articles/Arushiro'
import {Kinoppyd} from '@/app/2025/articles/Kinoppyd'
import {Kusano} from '@/app/2025/articles/Kusano'
import {Berserker} from '@/app/2025/articles/Berserker'
import {Quisty} from '@/app/2025/articles/Quisty'
import {Dera} from '@/app/2025/articles/Dera'
import {Nag4} from '@/app/2025/articles/Nag4'
import {Nagaitan} from '@/app/2025/articles/Nagaitan'
import {Mokuji} from '@/app/2025/articles/Mokuji'
import {Prologue} from '@/app/2025/articles/Prologue'
import {Atogaki} from '@/app/2025/articles/Atogaki'
import {Okuduke} from '@/app/2025/articles/Okuduke'
import {Omake1} from '@/app/2025/articles/Omake1'
import {Tayama} from '@/app/2025/articles/Tayama'
import {Sekiyasu} from '@/app/2025/articles/Sekiyasu'
import {Daichiro} from '@/app/2025/articles/Daichiro'

export const articleInfoList: ArticleInfo[] = [
  {
    id: 'mokuji',
    component: <Mokuji/>,
    totalPage: 1,
    title: '目次',
    description: '',
    atogaki: '',
    authorName: '',
    authorImage: '',
  },
  {
    id: 'prologue',
    component: <Prologue/>,
    totalPage: 3,
    title: 'プロローグ',
    description: '',
    atogaki: '',
    authorName: '',
    authorImage: '',
  },
  {
    id: 'omake1',
    component: <Omake1/>,
    totalPage: 1,
    title: 'おまけ',
    description: '',
    atogaki: '',
    authorName: '',
    authorImage: '',
  },
  {
    id: 'nanocloudx',
    component: <Nanocloudx/>,
    totalPage: 19,
    title: '国政政党をつくってみた',
    description: '最短最速で国政政党を爆誕させる方法について実践解説',
    atogaki: '衆議院と参議院と国会議事堂中央のカレーは全部味が違いますのよ',
    authorName: 'なのくろ',
    authorImage: '/2025/authors/nanocloudx.jpg',
    authorLinkX: 'nanocloudx',
    authorLinkWeb: 'wwww.dev',
  },
  {
    id: 'fuyutsubaki',
    component: <Fuyutsubaki/>,
    totalPage: 4,
    title: '様々な鉄',
    description: '鉄の紹介',
    atogaki: '鉄の4cm角の立方体は0.5kg',
    authorName: '7.85',
    authorImage: '/2025/authors/fuyutsubaki.png',
  },
  {
    id: 'tayama',
    component: <Tayama/>,
    totalPage: 10,
    title: 'クイズゲームのすすめ',
    description: 'みんはやにハマってしまった話',
    atogaki: 'ガチ勢はもっとやばい早押しテクを使っています',
    authorName: 'tayama0324',
    authorImage: '/2025/authors/tayama.jpg',
  },
  {
    id: 'berserker',
    component: <Berserker/>,
    totalPage: 3,
    title: '一口馬主になってみた',
    description: 'ギャンブルじゃない目線からの競馬',
    atogaki: 'そらからおかねがふってきてほしい',
    authorName: '一口馬主P',
    authorImage: '/2025/authors/berserker.png',
  },
  {
    id: 'kusano',
    component: <Kusano/>,
    totalPage: 4,
    title: '目隠しをしてルービックキューブを揃える',
    description: 'ルービックキューブを見ずに揃える方法を解説します',
    atogaki: 'いつかは5x5x5のキューブを揃えたい',
    authorName: 'kusano_k',
    authorImage: '/2025/authors/kusano.png',
    authorLinkX: 'kusano_k',
  },
  {
    id: 'arushiro',
    component: <Arushiro/>,
    totalPage: 4,
    title: 'VRで女の子の声を出す男たちの話',
    description: '両声類の人たちの技術について',
    atogaki: 'みんなもやろう女声',
    authorName: 'あるしろ',
    authorImage: '/2025/authors/arushiro.png',
    authorLinkX: 'arushiro_ikumo'
  },
  {
    id: 'nagaitan',
    component: <Nagaitan/>,
    totalPage: 5,
    title: 'サイバーチンピラに絡まれた話',
    description: '仕事中にいきなり電話がかかってきたんです',
    atogaki: '子どもの風邪がうつって11月〜12月の3週間が無に消えました',
    authorName: 'ながいたん',
    authorImage: '/2025/authors/nagaitan.jpeg',
  },
  {
    id: 'quisty',
    component: <Quisty/>,
    totalPage: 8,
    title: '新人PMとAI探偵の事件目録アプリ申請編',
    description: 'AIを限界まで使って、仕事も生活も事件解決！？',
    atogaki: '最後は手動なんだよな、責任を取る意味でも',
    authorName: 'きすちぃ',
    authorImage: '/2025/authors/quisty.png',
    authorLinkX: 'Quisty',
    authorLinkWeb: 'lit.link/Quisty'
  },
  {
    id: 'sekiyasu',
    component: <Sekiyasu/>,
    totalPage: 1,
    title: 'そういえば昔クマに襲われた',
    description: '昨今のクマ被害を見聞きして思い出したので',
    atogaki: 'この経験のおかげで、クマ報道に冷静でいられる',
    authorName: 'かえで@office_acer',
    authorImage: '/2025/authors/sekiyasu.jpg',
  },
  {
    id: 'kinoppyd',
    component: <Kinoppyd/>,
    totalPage: 4,
    title: 'トンチキな子供服',
    description: '子供服はかわいいですよ',
    atogaki: 'トンチキな服を着ている子供はかわいいです',
    authorName: 'kinoppyd',
    authorImage: '/2025/authors/kinoppyd.jpeg',
  },
  {
    id: 'nag4',
    component: <Nag4/>,
    totalPage: 2,
    title: '秋葉原のケバブでいちばん美味い店はココ',
    description: 'ケバブ屋を巡りました',
    atogaki: '今後も至高のケバブを求めています',
    authorName: 'nag4',
    authorImage: '/2025/authors/nag4.png',
  },
  {
    id: 'dera',
    component: <Dera/>,
    totalPage: 9,
    title: '1年間男磨きのために読書に励んだ話',
    description: '弱者男性による読書感想文です',
    atogaki: '家ではAudible、外ではKindleが習慣になりました',
    authorName: '匿名弱者男性',
    authorImage: '/2025/authors/dera.jpg',
  },
  {
    id: 'daichiro',
    component: <Daichiro/>,
    totalPage: 1,
    title: 'THIS IS サイバーメタルチンピラ',
    description: '7コママンガ',
    atogaki: '最高傑作です',
    authorName: 'だいちろ',
    authorImage: '/2025/authors/daichiro.png',
  },
  {
    id: 'atogaki',
    component: <Atogaki/>,
    totalPage: 2,
    title: 'あとがき',
    description: '',
    atogaki: '',
    authorName: '',
    authorImage: '',
  },
  {
    id: 'okuduke',
    component: <Okuduke/>,
    totalPage: 1,
    title: '奥付',
    description: '',
    atogaki: '',
    authorName: '',
    authorImage: '',
  },
]
