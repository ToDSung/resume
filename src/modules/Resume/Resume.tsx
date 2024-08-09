import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Contact from './Profile/Contact';
import Noodoe from './Experience/Noodoe';
import DeepQ from './Experience/DeepQ';
import IISI from './Experience/IISI';
import Typography from '../../components/Typography';

const styles = StyleSheet.create({
  main: {
    margin: 10,
    flexDirection: 'column',
    flex: 1,
  },

  section: {
    gap: 4,
    borderBottom: '3px solid #7799B6'
  },
});

const Resume = () => (
  <Document>
    <Page size="A4">
      <View style={styles.main}>
        <View style={styles.section}>
          <Typography variant='h5'>Tod Sung</Typography>
          <Typography variant='h6'>Senior Frontend Engineer</Typography>
          <Contact />
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