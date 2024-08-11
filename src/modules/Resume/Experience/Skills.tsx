import Typography from "../../../components/Typography";
import ListItem from "../../../components/ListItem";
import { View } from "@react-pdf/renderer";

const Skills = () => (
  <>
    <View>
      <Typography variant='body-lg'>Soft Skills:</Typography>
      <ListItem>Problem-solving / Responsibility / Attention to detail / Communication skills</ListItem>
    </View>
    <View>
      <Typography variant='body-lg'>Front-end Technologies:</Typography>
      <ListItem>TypeScript / React / Next.js</ListItem>
      <ListItem>State management: React Redux / Jotai / TanStack Query</ListItem>
      <ListItem>Libraries: i18next / d3.js / Leaflet</ListItem>
    </View>
    <View>
      <Typography variant='body-lg'>Testing</Typography>
      <ListItem>Jest / Playwright / Cucumber.js</ListItem>
    </View>
    <View>
      <Typography variant='body-lg'>Back-end Technologies</Typography>
      <ListItem>Node.js / Docker</ListItem>
    </View>
  </>
)

export default Skills