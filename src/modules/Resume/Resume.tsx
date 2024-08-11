import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Profile from './Profile';
import Noodoe from './Experience/Noodoe';
import DeepQ from './Experience/DeepQ';
import IISI from './Experience/IISI';
import { PALETTE } from './Resume.const';
import Typography from '../../components/Typography';



const styles = StyleSheet.create({
  main: {
    margin: 10,
    flexDirection: 'column',
    flex: 1,
  },

  section: {
    paddingVertical: 5,
    borderBottom: `3px solid ${PALETTE.border}`
  },
});

const Resume = () => (
  <Document>
    <Page size="A4">
      <View style={styles.main}>
        <View style={styles.section}>
          <Profile />
        </View>
        <View style={styles.section}>
          <Text>Experience</Text>
          <Noodoe />
          <DeepQ />
          <IISI />
        </View>
        <View style={styles.section}>
          <Text>Skills</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Resume