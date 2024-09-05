import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="inicio"
        options={{
          tabBarLabel: 'Início',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="(fichas)"
        options={{
          tabBarLabel: 'Fichas',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="(pesquisa)"
        options={{
          tabBarLabel: 'Pesquisa',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          tabBarLabel: 'Chats',
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
