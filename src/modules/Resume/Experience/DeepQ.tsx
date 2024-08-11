import { View } from "@react-pdf/renderer";
import ListItem from "../../../components/ListItem";
import CompanyBlock from "./CompanyBlock";

const DeepQ = () => (
  <CompanyBlock title="HTC DeepQ AI Healthcare, Senior Frontend Engineer" duration="Oct 2021 ~ Sep 2022">
    <View>
      <ListItem>擔任資深前端工程師，參與產品釋出，與兩名前端開發工程師進行 code review。</ListItem>
      <ListItem>利用 React, Redux Observable 與團隊成員重構公司產品，提升程式碼可讀性、可維護性。</ListItem>
      <ListItem>分類、重整可複用 React 元件及專案函式庫。</ListItem>
      <ListItem>實作 file 上傳檢查功能，用以幫助使用者快速整理供給給 AI 訓練用的資料集，亦利用 Jest 補上單元測試，確保實作成果。</ListItem>
      <ListItem>維護、開發以 Vue, Vuetify, TypeScript, gRPC 為基底的系統網站，具備快速接手不同 tech stack 之能力。</ListItem>
    </View>
  </CompanyBlock>
)

export default DeepQ