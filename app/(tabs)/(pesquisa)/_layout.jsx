import { Stack } from "expo-router";

export default function PesquisaLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Pesquisa" }} />
      <Stack.Screen name="[id]" options={{ title: "Detalhes do Profissional" }} />
    </Stack>
  );
}
