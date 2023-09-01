const getImageSource = (imageName) => {
    switch (imageName) {
      case 'vigilert':
        return require('../assets/Images/vigilert.png');
      case 'emergency_response':
        return require('../assets/Images/emergency_response.png');
      case 'community_safety':
        return require('../assets/Images/community_safety.png');
      default:
        return null; // Return null for unknown image names
    }
  };
  
  export default getImageSource;
  