import { View } from "@react-pdf/renderer";
import ListItem from "../../../components/ListItem";
import CompanyBlock from "./CompanyBlock";

const Noodoe = () => (
  <CompanyBlock title="Noodoe, Senior Engineer" duration="Oct 2022 ~ Jun 2024">
    <View>
      <ListItem>擔任資深前端工程師，進行產品開發迭代，亦負責 code review 確保程式碼品質。</ListItem>
      <ListItem>獨立與各職能: designer, PM, backend, QA 銜接，確保功能需求與時程符合預期。</ListItem>
      <ListItem>實作 charger load management 功能，提供動態調整充電量分配介面，協助客戶降低營運成本。</ListItem>
      <ListItem>實作 log management 功能，幫助使用者回顧系統操作記錄，減少公司內部營運之成本。 </ListItem>
      <ListItem>以 TypeScript, react-hook-form, Zod, GraphQL 重構系統功能，透過型別保護，減少不必要的出錯情境。</ListItem>
      <ListItem>開發公司自用 UI component library，確保設計一致性。</ListItem>
      <ListItem>利用 Jotai 和 custom hook 重整資料流程式碼，提升可維護性。</ListItem>
    </View>
  </CompanyBlock>
)

export default Noodoe