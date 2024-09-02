import { StyleSheet, View } from '@react-pdf/renderer';
import Typography from '../../components/Typography';
import ListItem from '../../components/ListItem';
import Section from '../../components/Section';

const styles = StyleSheet.create({
  skills: {
    gap: 12,
  },
});

const Skills = () => (
  <Section title='Key Skills' withBorder>
    <View style={styles.skills}>
      <View>
        <Typography variant='h6'>Soft Skills:</Typography>
        <ListItem>
          Problem-solving / Responsibility / Attention to detail / Communication
          skills
        </ListItem>
      </View>
      <View>
        <Typography variant='h6'>Front-end Technologies:</Typography>
        <ListItem>TypeScript / React / Next.js / React Redux / Jotai</ListItem>
        <ListItem>
          Libraries: TanStack Query / Zod / React Hook Form / i18next / D3.js /
          Leaflet
        </ListItem>
      </View>
      <View>
        <Typography variant='h6'>Testing</Typography>
        <ListItem>Jest / Playwright / Cucumber.js</ListItem>
      </View>
      <View>
        <Typography variant='h6'>Back-end Technologies</Typography>
        <ListItem>Node.js / Docker</ListItem>
      </View>
    </View>
  </Section>
);

export default Skills;
