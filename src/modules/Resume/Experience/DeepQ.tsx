import { View } from '@react-pdf/renderer';
import Block from '../../../components/Block';
import ListItem from '../../../components/ListItem';

const DeepQ = () => (
  <Block
    title='HTC DeepQ AI Healthcare, Senior Frontend Engineer'
    suffix='Oct 2021 ~ Sep 2022'
  >
    <View>
      <ListItem>
        擔任資深前端工程師，參與產品釋出，與兩名前端開發工程師進行 code review。
      </ListItem>
      <ListItem>
        運用 React, Redux Observable
        與夥伴重構主要產品，提升程式碼可讀性、可維護性。
      </ListItem>
      <ListItem>分類、重整可複用 React 元件及專案函式庫。</ListItem>
      <ListItem>
        實作 file 上傳檢查功能，幫助使用者加速 AI 訓練資料集整理流程，並運用
        Jest 編寫單元測試，確保實作成果。
      </ListItem>
      <ListItem>
        維護、開發基於 Vue, Vuetify, TypeScript, gRPC
        的系統網站，具備快速接手不同 tech stack 的適應能力。
      </ListItem>
    </View>
  </Block>
);

export default DeepQ;
