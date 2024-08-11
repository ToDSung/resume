import { StyleSheet, View } from "@react-pdf/renderer"
import Typography from "./Typography"
import { ReactNode } from "react";

const styles = StyleSheet.create({
  listWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },

  bullet: {
    marginRight: 6
  }
});

interface ListItemProps {
  children: ReactNode
}

const ListItem = ({ children }: ListItemProps) => (
  <View style={styles.listWrapper}>
    <Typography variant="body-md" style={styles.bullet}>•</Typography>
    <Typography variant="body-md" style={{lineHeight: 1.5}}>{children}</Typography>
  </View>
)

export default ListItem