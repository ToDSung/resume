import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  item: {
    fontSize: 12
  },
});

const Contact = () => (
  <View>   
    <Text style={styles.item}>0975-871-937</Text>
    <Text style={styles.item}>wlunareve@gmail.com</Text>
    <Text style={styles.item}>Department of Information Management</Text>
  </View>
)

export default Contact