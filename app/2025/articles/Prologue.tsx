import {Page} from '@/components/Page'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2025/articleInfoList'

export function Prologue() {
  const info = getArticleInfo('prologue', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)
  return (
    <div id={info.id}>
      <Page pageNumber={startPage} isPrologue>
        <h1>プロローグ</h1>
      </Page>
      <Page pageNumber={startPage + 1} isPrologue>
        <p style={{textAlign: 'right'}}>寄稿：檻総文人</p>
      </Page>
    </div>
  )
}
