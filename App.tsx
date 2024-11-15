import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import "./global.css";
import selectPhotoFromGallery from "./components/selectPhotoFromGallery";
import takePhotoWithCamera from "./components/takePhotoWithCamera";

export default function App() {
  const [image, setImage] = useState<{ uri: string }>(
    require("./images/perro.jpg")
  );

  const handleTakePhotoWithCamera = () => {
    console.log("take photo");

    takePhotoWithCamera().then((uriImage) => {
      if (uriImage !== undefined) {
        setImage(uriImage);
      }
    });
  };

  const handleSelectPhotoFromGallery = () => {
    console.log("choose photo");

    selectPhotoFromGallery().then((uriImage) => {
      if (uriImage !== undefined) {
        setImage(uriImage);
      }
    });
  };

  return (
    <View className="flex flex-1 w-full h-full justify-center items-center">
      <Text className="text-3xl mb-4 px-42 text-center">
        Toma una foto con la camara con este botón:
      </Text>
      <TouchableOpacity onPress={handleTakePhotoWithCamera}>
        <Text className="font-bold text-3xl border-black border-4 p-4 mb-6 rounded-2xl">
          Cámara
        </Text>
      </TouchableOpacity>
      <Text className="text-3xl mb-4 px-42 text-center">
        Toma una foto de la galería con este botón:
      </Text>
      <TouchableOpacity onPress={handleSelectPhotoFromGallery}>
        <Text className="font-bold text-3xl border-black border-4 p-4 rounded-2xl">
          Gallería
        </Text>
      </TouchableOpacity>
      <View className="mt-6 border-4 border-black">
        <Image className="w-60 h-72" source={image} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
