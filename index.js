function city(object) {
  return object.address?.city;
}

console.log(city({ address: { city: "Toronto" } }));
console.log(city({ name: "Vera" }));
