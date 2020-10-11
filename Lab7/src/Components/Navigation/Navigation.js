import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginDetails from "../Login";
import ShowLoginDetails from "../ShowLoginDetails";
    

const AppNavigator = createStackNavigator(
{
    LoginDetails:{
    screen:LoginDetails,
    navigationOptions: { header: null}
},
ShowLoginDetails:{
    screen:ShowLoginDetails,
    navigationOptions: { header: null}
  },
}
);


export default createAppContainer(AppNavigator);