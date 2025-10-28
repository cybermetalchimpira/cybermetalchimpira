import {Image} from '@/components/Image'
import {Page} from '@/components/Page'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2025/articleInfoList'

export function Omake2() {
  const info = getArticleInfo('omake2', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)
  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <h2>ねこのページ</h2>
      </Page>
    </div>
  )
}
