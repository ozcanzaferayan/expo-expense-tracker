export const getIcon = (category) => {
  switch (category) {
    case "Travel":
      return {
        name: "airplane",
        color: "#ffb934",
      };
    case "Market":
      return {
        name: "fruit-watermelon",
        color: "#5e44e1",
      };
    case "Salary":
      return {
        name: "wallet",
        color: "#02c79c",
      };
    case "Clothing":
      return {
        name: "tshirt-crew",
        color: "#4274f7",
      };
    case "Housing":
      return {
        name: "home",
        color: "#e382d3",
      };
    default:
      return {
        name: "hand-coin",
        color: "#5e44e1",
      };
  }
};
