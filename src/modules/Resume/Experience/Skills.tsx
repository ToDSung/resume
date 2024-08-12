import Typography from "../../../components/Typography";
import ListItem from "../../../components/ListItem";
import { View } from "@react-pdf/renderer";

const Skills = () => (
  <>
    <View>
      <Typography variant='h6'>Soft Skills:</Typography>
      <ListItem>Problem-solving / Responsibility / Attention to detail / Communication skills</ListItem>
    </View>
    <View>
      <Typography variant='h6'>Front-end Technologies:</Typography>
      <View>
        <ListItem>TypeScript / React / Next.js</ListItem>
        <ListItem>State management: React Redux / Jotai / TanStack Query</ListItem>
      </View>
      <ListItem>Libraries: i18next / d3.js / Leaflet</ListItem>
    </View>
    <View>
      <Typography variant='h6'>Testing</Typography>
      <ListItem>Jest / Playwright / Cucumber.js</ListItem>
    </View>
    <View>
      <Typography variant='h6'>Back-end Technologies</Typography>
      <ListItem>Node.js / Docker</ListItem>
    </View>
  </>
)

export default Skills