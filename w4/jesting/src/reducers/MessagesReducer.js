export default (messages = [{text: 'hello world!'}], action) => {
  switch (action.type) {
    default:
      return messages;
  }
}