const getImageSource = (imageName) => {
    switch (imageName) {
      case 'anime1':
        return require('../assets/Images/anime1.png');
      case 'anime2':
        return require('../assets/Images/anime2.png');
      case 'anime3':
        return require('../assets/Images/anime3.png');
      case 'success':
        return require('../assets/Images/success--icon.png');
      case 'error':
        return require('../assets/Images/wrong--icon.png');
        case 'profile':
        return require('../assets/Images/profile.jpg');
      default:
        return null; // Return null for unknown image names
    }
  };
  
  export default getImageSource;
  