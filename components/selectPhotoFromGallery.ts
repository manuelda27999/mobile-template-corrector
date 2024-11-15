import * as ImagePicker from "expo-image-picker";

const selectPhotoFromGallery = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images"],
    allowsEditing: true,
    aspect: [3, 4],
    quality: 1,
  });

  console.log(result);

  if (!result.canceled) {
    const uriImage = { uri: result.assets[0].uri };
    return uriImage;
  }
};

export default selectPhotoFromGallery;
