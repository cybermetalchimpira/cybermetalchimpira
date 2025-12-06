import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2024/articleInfoList'
import {FullImagePage} from '@/components/FullImagePage'

export function Daichiro() {

  const info = getArticleInfo('daichiro', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)

  return (
    <div id={info.id}>
      <FullImagePage pageNumber={startPage} src="/2025/daichiro/image.png"/>
    </div>
  )
}
