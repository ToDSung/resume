import { ReactNode } from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import Typography from '../../../components/Typography';

const styles = StyleSheet.create({
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
});

interface CompanyBlockProps {
  title: string;

  duration: string;

  children: ReactNode;
}

const CompanyBlock = ({ title, duration, children }: CompanyBlockProps) => (
  <View>
    <View style={styles.titleWrapper}>
      <Typography variant='h6'>{title}</Typography>
      <Typography variant='h6'>{duration}</Typography>
    </View>
    {children}
  </View>
);

export default CompanyBlock;
