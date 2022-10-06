// In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//   - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//       - remove 'Honey' if you are allergic to honey
//         - modify Tea to 'Green Tea'


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
let allergic = true;

if (!(shoppingCart.includes('Meat'))) {
  shoppingCart.unshift('Meat');
  console.log(shoppingCart)
}
if (!(shoppingCart.includes('Sugar'))) {
  shoppingCart.push('Sugar');
  console.log(shoppingCart);
}
if (allergic) {
  shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
  console.log(shoppingCart);
}
shoppingCart[shoppingCart.indexOf('Tea')] = "Green Tea";
console.log(shoppingCart);

