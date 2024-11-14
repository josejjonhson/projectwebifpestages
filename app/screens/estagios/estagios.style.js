import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  stageContainer: {
    padding: 15,
    backgroundColor: COLORS.white,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.light_gray,
  },
  stageTitle: {
    fontSize: FONT_SIZE.md,
    fontWeight: 'bold',
    color: COLORS.dark_green,
  },
  stageDescription: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.dark_gray,
    marginTop: 5,
  },
};