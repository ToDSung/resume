import { Page, View, Document, StyleSheet } from '@react-pdf/renderer';
import Profile from './Profile';
import Noodoe from './Experience/Noodoe';
import DeepQ from './Experience/DeepQ';
import IISI from './Experience/IISI';
import { PALETTE } from './Resume.const';
import Typography from '../../components/Typography';
import ListItem from '../../components/ListItem';
import Skills from './Experience/Skills';

const styles = StyleSheet.create({
  main: {
    margin: 12,
    flexDirection: 'column',
    flex: 1,
    gap: 8,
  },

  profileSection: {
    paddingBottom: 16,
    borderBottom: `3px solid ${PALETTE.border}`
  },

  section: {
    paddingBottom: 12,
    borderBottom: `2px solid ${PALETTE.border}`
  },

  companies: {
    gap: 12,
  },

  skills: {
    gap: 8
  }
});

const Resume = () => (
  <Document>
    <Page size="A4">
      <View style={styles.main}>
        <View style={styles.profileSection}>
          <Profile />
        </View>
        <View style={styles.section}>
          <Typography variant='h4'>About Me</Typography>
          <Typography variant='body-md'>
            我是 Tod，是嚴謹的前端工程師，專注於產出的每一個細節，重視成果的實際體現。
            擁有五年網頁開發經驗，專長於 React 生態系的系統開發、重構，具備打造卓越產品的自信；在團隊中常做為承上啟下的角色，能夠有效的在開發團隊間溝通；
            工作之餘經常閱讀技術文章，並於團隊合作中提出觀點，致力於提升自己或是團隊的工作效率。
          </Typography>
        </View>
        <View style={styles.section}>
          <Typography variant='h4'>Work Experience</Typography>
          <View style={styles.companies}>
            <Noodoe />
            <DeepQ />
            <IISI />
          </View>
        </View>
        <View style={styles.section}>
          <Typography variant='h4'>Key Skills</Typography>
          <View style={styles.skills}>
            <Skills />
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default Resume