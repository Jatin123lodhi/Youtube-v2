// Hello everyone! If you're wondering how I made this small function, I simply made two arrays. One of the arrays contained a list of adjectives, while the other contained a list of objects. Then, I wrote a function to choose one random adjective and one random object and then put them together. I hope you enjoy using the Random Name Generator! //

const adjective = [
  "Excited",
  "Anxious",
  "Overweight",
  "Demonic",
  "Jumpy",
  "Misunderstood",
  "Squashed",
  "Gargantuan",
  "Broad",
  "Crooked",
  "Curved",
  "Deep",
  "Even",
  "Excited",
  "Anxious",
  "Overweight",
  "Demonic",
  "Jumpy",
  "Misunderstood",
  "Squashed",
  "Gargantuan",
  "Broad",
  "Crooked",
  "Curved",
  "Deep",
  "Even",
  "Flat",
  "Hilly",
  "Jagged",
  "Round",
  "Shallow",
  "Square",
  "Steep",
  "Straight",
  "Thick",
  "Thin",
  "Cooing",
  "Deafening",
  "Faint",
  "Harsh",
  "High-pitched",
  "Hissing",
  "Hushed",
  "Husky",
  "Loud",
  "Melodic",
  "Moaning",
  "Mute",
  "Noisy",
  "Purring",
  "Quiet",
  "Raspy",
  "Screeching",
  "Shrill",
  "Silent",
  "Soft",
  "Squeaky",
  "Squealing",
  "Thundering",
  "Voiceless",
  "Whispering",
];
const object = [
  "Taco",
  "Operating System",
  "Sphere",
  "Watermelon",
  "Cheeseburger",
  "Apple Pie",
  "Spider",
  "Dragon",
  "Remote Control",
  "Soda",
  "Barbie Doll",
  "Watch",
  "Purple Pen",
  "Dollar Bill",
  "Stuffed Animal",
  "Hair Clip",
  "Sunglasses",
  "T-shirt",
  "Purse",
  "Towel",
  "Hat",
  "Camera",
  "Hand Sanitizer Bottle",
  "Photo",
  "Dog Bone",
  "Hair Brush",
  "Birthday Card",
];
 

export const generateRandomName = () => {
  return (
    adjective[Math.floor(Math.random() * adjective.length)] +
    " " +
    object[Math.floor(Math.random() * object.length)]
  );
};

const emoji = ["🚀", "❤️", "🙏", "👨‍🎓", "🔴", "✅", "🧑‍💻"];
const someText = [
  "Hello All",
  "Namaste JS ;)",
  "Marvel?",
  "KGF",
  "REACT Doucumentry",
  "tvf",
  "Songs ",
  "shark tank",
];
export function generateRandomMessage( ) {
  let result = "";

  // console.log(someText[Math.floor(Math.random() * someText.length)])
  result = someText[Math.floor(Math.random() * someText.length)];
  return result + emoji[Math.floor(Math.random() * emoji.length)];
}

export function makeid(length = 5) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

// export function getRandomAvtar() {
//   return (
//     <img
//       className="w-8 h-8 rounded-full mr-3"
//       src="https://i.pravatar.cc/300"
//     />
//   );
// }
