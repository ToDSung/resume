import { StyleSheet, View } from '@react-pdf/renderer';
import Block from '../../../components/Block';
import ListItem from '../../../components/ListItem';
import Typography from '../../../components/Typography';

const QpePlus_URL = 'https://qpeplus.cwa.gov.tw/pub/';

const styles = StyleSheet.create({
  description: {
    marginBottom: 4,
  },
});

const QpePlus = () => (
  <Block title='QpePlus 劇烈天氣監測系統' titleLink={QpePlus_URL}>
    <Typography variant='body-md' style={styles.description}>
      於資拓宏宇所負責開發的天氣資訊系統，透過地圖、表格顯示氣候資訊參數，目的是為了在劇烈天氣狀況發生時，給予使用者進行決策的指標。
    </Typography>
    <View>
      <ListItem>JavaScript, Vue, Vuetify, VueX, Vite</ListItem>
      <ListItem>前端獨立作業、與兩位後端工程師協作。</ListItem>
      <ListItem>
        持續串接氣象資料項目且於時程內達成推出新版 UI 介面的里程碑。
      </ListItem>
    </View>
  </Block>
);

export default QpePlus;
