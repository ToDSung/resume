import { StyleSheet, View } from '@react-pdf/renderer';
import Block from '../../../components/Block';
import ListItem from '../../../components/ListItem';
import Typography from '../../../components/Typography';

const styles = StyleSheet.create({
  description: {
    marginBottom: 4,
  },
});

const AIP = () => (
  <Block title='DeepQ AI Platform'>
    <Typography variant='body-md' style={styles.description}>
      於 DeepQ
      所負責開發的醫療平台，功能為輔助醫師判定病灶所使用，使用者能夠上傳影像、標註資料、訓練模型、推論結果、檢定成果後再次訓練新的模型。
    </Typography>
    <View>
      <ListItem>JavaScript, React, Material UI, redux-observable</ListItem>
      <ListItem>與兩位前端，三位後端工程師共同協作。</ListItem>
      <ListItem>維護使用 Rxjs 開發的標註醫學影像功能。</ListItem>
      <ListItem>
        使用 firebase aggregation 在 client 端完成 API pagination
      </ListItem>
      <ListItem>
        使用 File System API 幫助使用者在 client 端檢查醫學影像。
      </ListItem>
    </View>
  </Block>
);

export default AIP;
