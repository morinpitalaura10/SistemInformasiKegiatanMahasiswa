import { StyleSheet } from 'react-native';

const colors = {
  sage: '#C7D2C3',
  cream: '#faf6eaff',
  white: '#FFFFFF',
  dark: '#333333',
  lightGray: '#DADADA',
  green: '#bbd192ff',
  red: '#D9534F',
  blue: '#6CA6CD',
};

export const themeColors = colors;

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.cream,
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 12,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.dark,
    marginVertical: 8,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.dark,
    marginBottom: 4,
  },
  cardText: {
    color: colors.dark,
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: colors.white,
  },
  button: {
    backgroundColor: colors.sage,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: colors.dark,
    fontWeight: '600',
  },
  buttonDanger: {
    backgroundColor: colors.red,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDangerText: {
    color: colors.white,
    fontWeight: '600',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.sage,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  navButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
  },
  navButtonText: {
    fontWeight: '600',
    color: colors.dark,
  },
  profileText: {
    fontSize: 16,
    color: '#40513B',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
});
