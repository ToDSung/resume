import { StyleSheet, View } from '@react-pdf/renderer';
import Block from '../../../components/Block';
import ListItem from '../../../components/ListItem';
import Typography from '../../../components/Typography';

const BLOG_URL = 'https://tod-blog.vercel.app/';

const styles = StyleSheet.create({
  block: {
    marginTop: 20,
  },

  description: {
    marginBottom: 4,
  },
});

const Blog = () => (
  <Block title='Personal Blog' titleLink={BLOG_URL} style={styles.block}>
    <Typography variant='body-md' style={styles.description}>
      用於放置技術筆記及闡述個人想法的部落格。部落格由兩個網站所組成，主體為
      Next.js 所建置的 SSG 網站，另一個則是用 docusaurus
      建立的專案，目的是方便直接轉換 markdown。 兩專案的程式碼置於使用 yarn
      workspace 建立的 monorepo 專案，部屬方式都是使用 Vercel。
    </Typography>
    <View>
      <ListItem>TypeScript, Next.js, Tailwind CSS</ListItem>
      <ListItem>個人獨立完成建置、開發、佈署。</ListItem>
      <ListItem>使用 ESlint, Prettier 確保程式碼品質。</ListItem>
      <ListItem>使用 commitlint 套用 Conventional Commit。</ListItem>
      <ListItem>在推送前使用 husky 檢查以上設定。</ListItem>
      <ListItem>
        該 monorepo 中放置了個人練習的 code，使用 Jest 完整 unit test，使用
        github action 做 CI。
      </ListItem>
    </View>
  </Block>
);

export default Blog;
