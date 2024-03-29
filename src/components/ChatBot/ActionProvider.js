/** @format */

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  helloWorldhandler = () => {
    const message = this.createChatBotMessage('hello again');
    this.setChatBotMessage(message);
  };

  aa = () => {
    const message = this.createChatBotMessage('نعم انه غبي كبير وجحش صغير');
    this.setChatBotMessage(message);
  };

  listhandler = () => {
    const message = this.createChatBotMessage('אני אראה לך מה ביקשת', {
      widget: 'todos',
    });

    this.setChatBotMessage(message);
  };

  erorhandler = () => {
    const message = this.createChatBotMessage(
      'שלום לך אני לא מבין מה הכנסת נא בבקשה לבחור אחת מהאופציות שלנות',
      {
        widget: 'options',
      }
    );
    this.setChatBotMessage(message);
  };

  setChatBotMessage = (messege) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, messege],
    }));
  };

  deleteFirst = () => {
    const classa = document.getElementsByClassName(
      'react-chatbot-kit-chat-bot-message-container'
    );
    let a = Array.from(classa);
    a[0].outerHTML = '';
  };
}

export default ActionProvider;
