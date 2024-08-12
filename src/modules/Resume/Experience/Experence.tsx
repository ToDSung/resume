import { StyleSheet, View } from "@react-pdf/renderer"
import Section from "../../../components/Section"
import Noodoe from './Noodoe';
import DeepQ from './DeepQ';
import IISI from './IISI';

const styles = StyleSheet.create({
  companies: {
    gap: 12,
  },
});

const Experience = () => (
  <Section title="Experience" withBorder>
    <View style={styles.companies}>
      <Noodoe />
      <DeepQ />
      <IISI />
    </View>
  </Section>
)

export default Experience