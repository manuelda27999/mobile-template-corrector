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
    takePhotoWithCamera().then((uriImage) => {
      if (uriImage !== undefined) {
        setImage(uriImage);
      }
    });
  };

  const handleSelectPhotoFromGallery = () => {
    selectPhotoFromGallery().then((uriImage) => {
      if (uriImage !== undefined) {
        setImage(uriImage);
      }
    });
  };

  return (
    <View className="flex flex-1 w-full h-full justify-start items-center pb-8">
      <Text className="text-4xl text-white bg-universae-blue text-center font-bold pt-16 pb-4 mb-2 px-4 w-full">
        Corrector de éxamenes de Universae
      </Text>
      <Text className="text-2xl mb-4 px-10 text-center">
        Selecciona una foto de la galería o toma una foto con la cámara
      </Text>
      <View className="w-full flex flex-row justify-evenly mb-4">
        <TouchableOpacity onPress={handleTakePhotoWithCamera}>
          <Text className="font-bold text-3xl border-black border-4 p-4 rounded-2xl">
            Cámara
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSelectPhotoFromGallery}>
          <Text className="font-bold text-3xl border-black border-4 p-4 rounded-2xl">
            Gallería
          </Text>
        </TouchableOpacity>
      </View>
      <View className=" w-full flex flex-1 items-center">
        <Image className="w-4/6 h-full border-4 rounded-md" source={image} />
      </View>
      <View className="flex flex-col w-full items-center">
        <TouchableOpacity className="w-5/6">
          <Text className="text-center font-bold text-3xl border-black border-4 p-4 mb-4 mt-4 rounded-2xl">
            Agregar una plantilla
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-5/6">
          <Text className="text-center font-bold text-3xl border-black border-4 p-4 mb-4 rounded-2xl">
            Corregir exámen
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
