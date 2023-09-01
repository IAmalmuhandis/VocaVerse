import { StyleSheet } from 'react-native';

const classes = {
  primaryColor: '#E9B44C',
  secondaryColor: '#1C110A',
  tertiaryColor: '#E8E1EF',
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: classes.primaryColor,
        padding: 20,
        borderRadius: 10,
        marginBottom: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
      },
      heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
      },
  // Add other styles here
});

export default styles;
export { classes }; // Export the color classes
