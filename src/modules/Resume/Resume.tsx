import { Page, View, Document, StyleSheet } from '@react-pdf/renderer';
import Profile from './Profile';
import Noodoe from './Experience/Noodoe';
import DeepQ from './Experience/DeepQ';
import IISI from './Experience/IISI';
import { PALETTE } from './Resume.const';
import Typography from '../../components/Typography';
import Skills from './Experience/Skills';
import Section from '../../components/Section';

const styles = StyleSheet.create({
  main: {
    margin: 10,
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
  },
  
  sectionBorder: {
    borderBottom: `2px solid ${PALETTE.border}`
  },

  companies: {
    gap: 12,
  },

  skills: {
    gap: 2
  }
});

const Resume = () => (
  <Document>
    <Page size="A4">
      <View style={styles.main}>
        <View style={styles.profileSection}>
          <Profile />
        </View>
        <Section title="About Me" withBorder>
          <Typography variant='body-md'>
            我是 Tod，是嚴謹的前端工程師，專注於產出的每一個細節，重視成果的實際體現。
            擁有五年網頁開發經驗，專長於 React 生態系的系統開發、重構，具備打造卓越產品的自信；
            在團隊中承上啟下擔任溝通的橋樑，能夠有效協調團隊的需求；
            積極持續學習新技術，並於團隊合作中分享觀點，致力於提升自己或是團隊的工作效率。
          </Typography>
        </Section>
        <Section title="Experience" withBorder>
          <View style={styles.companies}>
            <Noodoe />
            <DeepQ />
            <IISI />
          </View>
        </Section>
        <Section title="Key Skills">
          <View style={styles.skills}>
            <Skills />
          </View>
        </Section>
      </View>
    </Page>
  </Document>
);

export default Resume