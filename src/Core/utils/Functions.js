export const generateRandomId = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomString = () => {
    let result = "";
    for (let i = 0; i < 3; i++) {
      result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return result;
  };
  return `${randomString()}-${randomString()}-${randomString()}-${randomString()}`;
};
