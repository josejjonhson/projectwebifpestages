import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.light_gray,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  profilePicContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  profileInfo: {
    marginBottom: 15,
  },
  profileName: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.dark_gray,
    textAlign: 'center',
  },
  profileEmail: {
    fontSize: FONT_SIZE.md,
    color: COLORS.dark_gray,
    textAlign: 'center',
    marginBottom: 30,
  }
};
