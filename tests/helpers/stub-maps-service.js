import Service from "@ember/service";

export const StubMapsService = Service.extend({
  getMapElement() {
    return Promise.resolve(document.createElement("div"));
  }
});
