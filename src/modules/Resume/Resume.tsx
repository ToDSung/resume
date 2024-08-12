import { Page, View, Document, StyleSheet } from '@react-pdf/renderer';
import Profile from './Profile';
import Skills from './Skills';
import AboutMe from './AboutMe';
import Experience from './Experience/Experence';

const styles = StyleSheet.create({
  main: {
    margin: 10,
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
        {/* TODO: Portofolio*/}
        <Skills />
      </View>
    </Page>
  </Document>
);

export default Resume;
