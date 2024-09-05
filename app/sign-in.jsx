import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Logo</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Digite seu nome"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Digite sua senha"
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Entrar"
          onPress={() => router.replace("/inicio")}
          color="#333"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Cadastrar"
          onPress={() => router.push("/sign-up")}
          color="#888"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logoContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    width: "80%",
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 30,
  },
  logoText: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
  },
  formContainer: {
    flex: 2,
    width: "80%",
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#333",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "#ededed",
    color: "#fff",
  },
  buttonContainer: {
    width: "50%",
    marginVertical: 10,
  },
});
