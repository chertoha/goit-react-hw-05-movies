import womanDefaultImage from 'images/defautl-woman.jpg';
import manDefaultImage from 'images/default-man.png';
import noGenderDefaultImage from 'images/default-no-gender.png';

const defautlAvatar = genderId => {
  switch (genderId) {
    case 1:
      return womanDefaultImage;
    case 2:
      return manDefaultImage;
    default:
      return noGenderDefaultImage;
  }
};

export default defautlAvatar;
