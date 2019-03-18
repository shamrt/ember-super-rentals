import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    filterByCity(query) {
      if (query !== "") {
        return this.store
          .query("rental", { city: query })
          .then(results => ({ query, results }));
      } else {
        return this.store
          .findAll("rental")
          .then(results => ({ query, results }));
      }
    }
  }
});
