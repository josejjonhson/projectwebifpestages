// companies.style.js
import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE } from '../../constants/theme';

export const styles = StyleSheet.create({
  companyContainer: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: COLORS.light_gray,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.dark_gray,
  },
  companyName: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.dark_green,
    fontWeight: 'bold',
  },
  companyDescription: {
    fontSize: FONT_SIZE.md,
    color: COLORS.dark_gray,
  },
});
