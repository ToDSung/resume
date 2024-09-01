import { ReactNode } from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import Typography from './Typography';

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

  suffix?: string;

  style?: Record<string, unknown>;

  children: ReactNode;
}

const Block = ({ title, suffix = '', style, children }: CompanyBlockProps) => (
  <View style={style}>
    <View style={styles.titleWrapper}>
      <Typography variant='h6'>{title}</Typography>
      <Typography variant='h6'>{suffix}</Typography>
    </View>
    {children}
  </View>
);

export default Block;
