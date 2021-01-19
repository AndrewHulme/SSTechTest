export let filter = (items, search) => {
  return items.filter((item) => {
    return item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });
};
