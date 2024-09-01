import { StyleSheet, View } from '@react-pdf/renderer';
import Section from '../../../components/Section';
import AIP from './AIP';
import Blog from './Blog';
import QpePlus from './QpePlus';
import EvConsole from './EvConsole';

const styles = StyleSheet.create({
  companies: {
    gap: 12,
  },
});

const Portofolio = () => (
  <Section title='Portofolio' withBorder>
    <View style={styles.companies}>
      <EvConsole />
      <Blog />
      <AIP />
      <QpePlus />
    </View>
  </Section>
);

export default Portofolio;
