import {Image} from '@/components/Image'
import {Page} from '@/components/Page'
import {Title} from '@/components/Title'
import {TwoColumn} from '@/components/TwoColumn'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2025/articleInfoList'

export function Nanocloudx() {
  const info = getArticleInfo('nanocloudx', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)

  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <Title articleInfo={info}/>
        <p>執筆中</p>
      </Page>
    </div>
  )
}
