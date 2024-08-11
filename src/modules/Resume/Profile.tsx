import { StyleSheet, View } from "@react-pdf/renderer";
import Typography from "../../components/Typography";
import { PALETTE } from "./Resume.const";

const styles = StyleSheet.create({
  titleWrapper: {
    display: 'flex', 
    flexDirection:'row', 
    flexWrap: 'wrap', 
    gap: 8, 
    alignItems: 'flex-end'
  },

  title: {
    color: PALETTE.font
  },

  info: {
    display: 'flex', 
    flexDirection:'row', 
    flexWrap: 'wrap', 
    gap: 2
  }
});

const Profile = () => (
  <>
    <View style={styles.titleWrapper}>   
      <Typography variant='h2' style={styles.title}>Tod Sung</Typography>
      <Typography variant='h5'>Senior Frontend Engineer</Typography>
    </View>
    <View style={styles.info}>   
      <Typography variant="subtitle-md">wlunareve@gmail.com</Typography>
      <Typography variant="subtitle-md">|</Typography>
      <Typography variant="subtitle-md">0975-871-937</Typography>
      <Typography variant="subtitle-md">|</Typography>
      <Typography variant="subtitle-md">國立中正大學資訊管理學系</Typography>  
    </View>
  </>
)

export default Profile