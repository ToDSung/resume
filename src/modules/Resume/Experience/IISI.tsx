import { View } from "@react-pdf/renderer";
import ListItem from "../../../components/ListItem";
import CompanyBlock from "./CompanyTemplate";

const IISI = () => (
  <CompanyBlock title="資拓宏宇國際股份有限公司, Full Stack Engineer" duration=" Apr 2019 ~ Oct 2021">
  <View>
    <ListItem>擔任全端工程師，與客戶面對面討論需求、獨立設計、實作實時資料查詢和各種氣象參數整合的互動系統。</ListItem>
    <ListItem>使用 Vue 生態系、 Vuetify 作為主要工具，開發、維護多個專案網頁。</ListItem>
    <ListItem>以 SCSS BEM 實作 RWD 的網站，提供各式裝置也能觀看得宜的介面。</ListItem>
    <ListItem>使用 Leaflet 搭配 OpenStreetMap 開發用以展示台灣地圖氣象資訊的網頁功能，供給各政府單位做為監控參考。</ListItem>
    <ListItem>使用 D3.js 繪製各式氣象資訊圖表，以直方圖，折線圖為主。</ListItem>
    <ListItem>除了前端工作，亦使用 Node.js 維護氣象局 Open Data 前台網站，並擴充新功能。</ListItem>
    <ListItem>導入 Vue I18n 提供網站多國語言功能，友善他國使用者體驗。</ListItem>
    <ListItem>調整 webpack 參數，自主導入 Vite, ESlint, Stylelint, Jest ，確保程式碼支援度、開發速度和品質。</ListItem>
  </View>
</CompanyBlock>
)


export default IISI