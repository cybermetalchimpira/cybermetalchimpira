import {Page} from '@/components/Page'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2025/articleInfoList'
import {AtogakiLayout} from '@/components/AtogakiLayout'

export function Atogaki() {
  const info = getArticleInfo('atogaki', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)
  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <h2>編集後記</h2>
        <p>
          来年も治安維持ノンジャンル総合誌こと、サイバーメタルチンピラをどうぞよろしく。
        </p>
        <p style={{textAlign: 'right', marginTop: '-0.5rem'}}>編集担当 なのくろ</p>
      </Page>
      <Page pageNumber={startPage + 1}>
        <section>
          <AtogakiLayout articleInfoList={articleInfoList}/>
        </section>
        <section>
          <p>
            <b>謝辞</b><br/>
            プロローグ：檻総文人<br/>
            表紙絵生成：kuri<br/>
            サイバーメタルチンピラガール：白玉いおり<br/>
            猫：おこげ＆すあま<br/>
            編集長：kinoppyd / なのくろ
          </p>
        </section>
      </Page>
    </div>
  )
}
