import * as ImagePicker from "expo-image-picker";

const takePhotoWithCamera = async () => {
  let result = await ImagePicker.launchCameraAsync({
    mediaTypes: ["images"],
    allowsEditing: true,
    aspect: [3, 4],
    quality: 1,
  });

  if (!result.canceled) {
    const uriImage = { uri: result.assets[0].uri };
    return uriImage;
  }
};

export default takePhotoWithCamera;
