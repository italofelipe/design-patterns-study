import Button from "./Button";
import Expression from "./Expression";
import InputText from "./InputText";

const inputText = new InputText();
inputText.register(new Expression());
inputText.register(new Button()); // imagine button can be enabled when input text is not empty
inputText.notifyAll();
/**
Expected output:
  Expression was notified
  Button was notified
 */
