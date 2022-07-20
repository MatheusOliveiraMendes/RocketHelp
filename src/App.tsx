import { NativeBaseProvider } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { THEME } from "./styles/theme";

import { SignIn } from './screens/SignIn';
import { Loading } from "./components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts ({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      
      {fontsLoaded ? <SignIn /> : <Loading />}
      
    </NativeBaseProvider>



  );
}



