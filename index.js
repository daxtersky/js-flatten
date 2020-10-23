import { nestedArray } from "./data";

const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>Flatten multidimentional arrays</h1>`;

console.log("nestedArray", nestedArray);

/*
 * function receives nested array of objects as a parameter
 * function returns a flatten array based on property "subMenuItemList" which has multiple nested arrays
 */

const createFlattenMenuItemList = menuItems => {
  const flatten = [];
  for (const menuItem of menuItems) {
    if (menuItem.formId) {
      flatten.push(menuItem);
    }
    addMenuItemChildren(menuItem, flatten);
  }
  return flatten;
};

const addMenuItemChildren = (menuItem, flattenArray) => {
  if (menuItem.subMenuItemList?.length > 0) {
    for (const subMenuItem of menuItem.subMenuItemList) {
      flattenArray.push(subMenuItem);
      const moreChildren = addMenuItemChildren(subMenuItem, flattenArray);
      if (moreChildren) {
        return moreChildren;
      }
    }
  }
};

const flattenArray = createFlattenMenuItemList(nestedArray);

console.log("flattenArray", flattenArray);
