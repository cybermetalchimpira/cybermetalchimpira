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
import {Omake2} from '@/app/2025/articles/Omake2'
import {Okuduke} from '@/app/2025/articles/Okuduke'
import {ArticleInfo} from '@/app/lib'
import {Omake1} from '@/app/2025/articles/Omake1'
import {Tayama} from '@/app/2025/articles/Tayama'
import {Sekiyasu} from '@/app/2025/articles/Sekiyasu'
import {Kuri} from '@/app/2025/articles/Kuri'

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
    totalPage: 2,
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
    atogaki: '執筆中',
    authorName: 'なのくろ',
    authorImage: '/2025/authors/nanocloudx.jpg',
    authorLinkX: 'nanocloudx',
    authorLinkWeb: 'wwww.dev',
  },
  {
    id: 'tayama',
    component: <Tayama/>,
    totalPage: 10,
    title: 'クイズゲームのすすめ',
    description: 'みんはやにハマってしまった話',
    atogaki: '執筆中',
    authorName: 'tayama0324',
    authorImage: '/2025/authors/tayama.png',
  },
  {
    id: 'kusano',
    component: <Kusano/>,
    totalPage: 4,
    title: '目隠しをしてルービックキューブを揃える',
    description: 'ルービックキューブを見ずに揃える方法を解説します',
    atogaki: 'いつかは5x5x5のキューブを揃えたい。',
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
    id: 'fuyutsubaki',
    component: <Fuyutsubaki/>,
    totalPage: 1,
    title: '様々な鉄',
    description: '鉄の紹介',
    atogaki: '豆知識:鉄の4cm角の立方体は0.5kg',
    authorName: '7.85',
    authorImage: '/2025/authors/fuyutsubaki.png',
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
    id: 'sekiyasu',
    component: <Sekiyasu/>,
    totalPage: 1,
    title: 'そういえば昔クマに襲われた',
    description: '昨今のクマ被害を見聞きして思い出したので',
    atogaki: 'この経験のおかげで、クマ報道に冷静でいられる',
    authorName: 'かえで@office_acer',
    authorImage: '/2025/authors/sekiyasu.png',
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
    id: 'dera',
    component: <Dera/>,
    totalPage: 9,
    title: '1年間男磨きのために読書に励んだ話',
    description: '弱者男性による読書感想文です',
    atogaki: '家ではAudible、外ではKindleが習慣になりました',
    authorName: '匿名弱者男性',
    authorImage: '/2025/authors/dera.png',
  },
  {
    id: 'kuri',
    component: <Kuri/>,
    totalPage: 1,
    title: 'クラファンで同人誌を作って商業誌になった話',
    description: 'VTuberデザインブックのお話',
    atogaki: '',
    authorName: '小栗さえ',
    authorImage: '/2025/authors/kuri.png',
  },
  {
    id: 'kinoppyd',
    component: <Kinoppyd/>,
    totalPage: 1,
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
    id: 'nagaitan',
    component: <Nagaitan/>,
    totalPage: 1,
    title: 'サイバーチンピラに絡まれた話',
    description: '仕事中にいきなり電話がかかってきたんです',
    atogaki: '執筆中',
    authorName: 'ながいたん',
    authorImage: '/2025/authors/nagaitan.jpeg',
  },
  {
    id: 'omake2',
    component: <Omake2/>,
    totalPage: 1,
    title: 'おまけ',
    description: '',
    atogaki: '',
    authorName: '',
    authorImage: '',
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
