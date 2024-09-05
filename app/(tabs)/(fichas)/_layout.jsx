import { Stack } from "expo-router";

export default function FichasLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Fichas", headerShown: false }} />
      <Stack.Screen name="perimetria" options={{ title: "Ficha de Perimetria" }} />
      <Stack.Screen name="exercicios" options={{ title: "Lista de Fichas de Exercício" }} />
      <Stack.Screen name="[id]" options={{ title: "Detalhes da Ficha" }} />
    </Stack>
  );
}
