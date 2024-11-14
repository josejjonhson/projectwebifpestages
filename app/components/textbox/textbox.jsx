import { Text, TextInput } from "react-native";
import { styles } from "./textbox.style.js";

function TextBox(props){
    return <>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput secureTextEntry={props.isPassword} placeholder={props.placeholder} style={styles.input} />
    </>
}

export default TextBox;