import {Page} from '@/components/Page'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2025/articleInfoList'
import {Image} from "@/components/Image";

export function Omake1() {
  const info = getArticleInfo('omake1', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)
  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <h2>ねこのページ</h2>
        <Image height={'90mm'} src={'/2025/omake/omake1-1.jpg'} alt={'サメチン4周年、祝ったるでｺﾞﾙｧ'}/>
        <Image height={'100mm'} src={'/2025/omake/omake1-2.jpg'} alt={'いつでも邪魔できるんだぞ( ˘ω˘)ｽﾔｧ'}/>
      </Page>
    </div>
  )
}
