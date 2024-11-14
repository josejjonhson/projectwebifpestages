import { View, Image, Text } from "react-native";
import { styles } from "./header.style.js";
import icons from "../../constants/icons.js";

function Header(props){
    return <View style={styles.header}>
        <Image style={styles.logo} source={icons.logo_ifpe_estagios} />
        <Text style={styles.title}>{props.text}</Text>
    </View>
}

export default Header;