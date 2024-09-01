import { Font, Link, StyleSheet, Text } from '@react-pdf/renderer';
import { ReactNode } from 'react';

Font.register({
  family: 'Noto Sans TC',
  src: '/src/public/fonts/NotoSansTC-Regular.ttf',
});

Font.registerHyphenationCallback((word: string) => {
  if (word.length === 1) {
    return [word];
  }

  return Array.from(word)
    .map(char => [char, ''])
    .reduce((arr, current) => {
      arr.push(...current);
      return arr;
    }, []);
});

const fontSizes = {
  '1': 9,
  '2': 10.5,
  '3': 12,
  '4': 13.5,
  '5': 16.5,
  '6': 18,
  '7': 19.5,
  '8': 21,
  '9': 24,
} as const;

const fontWeights = {
  light: 'light',
  regular: 'normal',
  medium: 'medium',
  bold: 'bold',
} as const;

const styles = StyleSheet.create({
  base: {
    fontFamily: 'Noto Sans TC',
  },

  h2: {
    fontSize: fontSizes['8'],
    fontWeight: fontWeights.medium,
  },

  h3: {
    fontSize: fontSizes['7'],
    fontWeight: fontWeights.bold,
  },

  h4: {
    fontSize: fontSizes['6'],
    fontWeight: fontWeights.bold,
  },

  h5: {
    fontSize: fontSizes['5'],
    fontWeight: fontWeights.bold,
  },

  h6: {
    fontSize: fontSizes['4'],
    fontWeight: fontWeights.bold,
  },

  'subtitle-lg': {
    fontSize: fontSizes['3'],
    fontWeight: fontWeights.bold,
  },

  'subtitle-md': {
    fontSize: fontSizes['2'],
    fontWeight: fontWeights.medium,
  },

  'body-lg': {
    fontSize: fontSizes['3'],
    fontWeight: fontWeights.regular,
  },

  'body-md': {
    fontSize: fontSizes['2'],
    fontWeight: fontWeights.regular,
  },

  'body-sm': {
    fontSize: fontSizes['1'],
    fontWeight: fontWeights.regular,
  },
});

interface TypographyProps {
  variant:
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle-lg'
    | 'subtitle-md'
    | 'body-lg'
    | 'body-md'
    | 'body-sm';

  link?: string;

  style?: Record<string, unknown>;

  children: ReactNode;
}

const Typography = ({ variant, link, style, children }: TypographyProps) => {
  const content = (
    <Text style={{ ...style, ...styles.base, ...styles[variant] }}>
      {children}
    </Text>
  );

  return link ? <Link src={link}>{content}</Link> : content;
};

export default Typography;
