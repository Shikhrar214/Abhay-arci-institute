const UniqueIdGenerator = (prevId) => {
  if (!prevId) {
    throw new Error("prevID not found");
  }

  const prefix = prevId.slice(0, 4);
  const numberPart = prevId.slice(4);

  const nextNumber = (Number(numberPart) + 1)
    .toString()
    .padStart(numberPart.length, "0");

  const newUID = prefix + nextNumber;
  return newUID;
};


// console.log("UniqueIdGenerator:", UniqueIdGenerator());

export { UniqueIdGenerator };
