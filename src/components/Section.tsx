import { ReactNode } from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import Typography from './Typography';
import { PALETTE } from '../modules/Resume/Resume.const';

const styles = StyleSheet.create({
  section: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 12,
  },

  titleWrapper: {
    width: 100,
  },

  title: {
    color: PALETTE.font,
  },

  childrenWrapper: {
    marginTop: 4,
    flex: 1,
  },

  sectionBorder: {
    borderBottom: `2px solid ${PALETTE.border}`,
  },
});

interface SectionProps {
  title: string;

  withBorder?: true;

  children: ReactNode;
}

const Section = ({ title, withBorder, children }: SectionProps) => (
  <View style={{ ...styles.section, ...(withBorder && styles.sectionBorder) }}>
    <View style={styles.titleWrapper}>
      <Typography variant='h5' style={styles.title}>
        {title}
      </Typography>
    </View>
    <View style={styles.childrenWrapper}>{children}</View>
  </View>
);

export default Section;
