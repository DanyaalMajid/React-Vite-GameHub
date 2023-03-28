import { icons } from "feather-icons";

const iconNames = [
  "playstation",
  "playstation3",
  "playstation4",
  "playstation5",
  "xbox",
  "xbox360",
  "xbox-one",
  "xbox-series-x",
  "nintendo-switch",
  "windows",
  "linux",
  "macos",
];

const iconsObject = {};
iconNames.forEach((name) => {
  iconsObject[name] = icons[name].toSvg({ class: "icon" });
});

export default iconsObject;
