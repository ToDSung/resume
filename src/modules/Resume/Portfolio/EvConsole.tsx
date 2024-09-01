import { StyleSheet, View } from '@react-pdf/renderer';
import Block from '../../../components/Block';
import ListItem from '../../../components/ListItem';
import Typography from '../../../components/Typography';

const styles = StyleSheet.create({
  description: {
    marginBottom: 4,
  },
});

const EvConsole = () => (
  <Block title='Noodoe Ev Console'>
    <Typography variant='body-md' style={styles.description}>
      於 Noodoe
      所負責開發的充電樁設施維運系統，其中我主要負責開發充電量分配的功能，以及開發內部元件庫，另外亦擔任前端
      reviewer 跟夥伴一起合作推進產品。
    </Typography>
    <View>
      <ListItem>TypeScript, Next.js, Material UI, GraphQL。</ListItem>
      <ListItem>約莫十五人左右的工程師團隊共同協作。</ListItem>
      <ListItem>
        將原先占比約 50% 左右的 JavaScript 程式碼全面轉換為 TypeScript。
      </ListItem>
      <ListItem>
        用 TanStack Query 封裝 Restful API，以減少不必要的資料請求。
      </ListItem>
      <ListItem>利用 GrpahQL 降低前後端資料型別更動可能造成的錯誤。</ListItem>
      <ListItem>
        用 TypeScript 的條件型別規範充電系統在實務情境的硬體規則。
      </ListItem>
      <ListItem>用 class 封裝電量上下限計算的物理限制邏輯。</ListItem>
      <ListItem>
        使用 Linaria 開發 component，透過 zero runtime 提升 performance。
      </ListItem>
      <ListItem>設計 log management 的翻譯、查詢機制。</ListItem>
      <ListItem>維護充電流程的 E2E 測試</ListItem>
    </View>
  </Block>
);

export default EvConsole;
