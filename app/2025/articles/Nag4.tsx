import {Page} from '@/components/Page'
import {Title} from '@/components/Title'
import {Image} from '@/components/Image'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2025/articleInfoList'

export function Nag4() {
  const info = getArticleInfo('nag4', articleInfoList)
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
