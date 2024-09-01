import { Page, View, Document, StyleSheet } from '@react-pdf/renderer';
import Profile from './Profile';
import AboutMe from './AboutMe';
import Experience from './Experience/Experence';
import Portofolio from './Portfolio/Portfolio';
import Skills from './Skills';

const styles = StyleSheet.create({
  main: {
    margin: 12,
    flexDirection: 'column',
    flex: 1,
    gap: 8,
  },
});

const Resume = () => (
  <Document>
    <Page size='A4'>
      <View style={styles.main}>
        <Profile />
        <AboutMe />
        <Experience />
        <Portofolio />
        <Skills />
      </View>
    </Page>
  </Document>
);

export default Resume;
